import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useUser } from "../hooks";
import { Link } from "react-router-dom";
import { lazy } from "react";
import { useLoginMutation } from "../app/endpoints/userEndpoints";
import { toast } from "react-toastify";

const CanvasModel = lazy(() => import("../canvas"));

const Login = () => {
  const { user, setUser } = useUser();
  const [login, { isLoading, error }] = useLoginMutation();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This is a required field")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("This is a required field")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const onSubmit = (body) => {
    login(body)
      .unwrap()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => toast.error(err.data.message));
    // console.log(logBody);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="w-[60%] h-full">
        <CanvasModel targetRotation={[0, 0.2, 0]} />
      </div>
      <div className="w-[40%] h-full bg-[#1E1E2B] flex  items-center justify-center">
        <div className="w-[70%] h-2/3 text-white flex flex-col items-center gap-">
          <div className="flex w-[80%] items-center justify-between ">
            <h1>Mukagen</h1>
            <Link to={"/register"}>
              <h2 className="text-[#3F7BF0] font-bold hover:text-[#3f6ef0]">
                Sign-up
              </h2>
            </Link>
          </div>
          <h1 className="text-4xl w-[80%] mt-2">SIGN-IN</h1>
          <div className="w-[80%] h-[1px] bg-white mt-12 rounded-lg"></div>
          <div className="w-[80%] h-[55%]  mt-8">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnChange
            >
              {() => (
                <Form className="flex flex-col w-full h-full justify-between">
                  <div className="h-[30%] w-full">
                    <label className="block mb-2 text-sm font-medium ">
                      Email
                    </label>
                    <Field
                      name="email"
                      placeholder="email@xyz.com"
                      className="bg-gray-50 border border-gray-300 text-[#1E1E2B]  text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5"
                    />
                    <div className="text-red-600 text-xs">
                      <ErrorMessage name="username" component={"span"} />
                    </div>
                  </div>

                  <div className="h-[30%] w-full">
                    <label className="block mb-2 text-sm font-medium ">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 text-[#1E1E2B] text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5"
                    />
                    <div className="text-red-600 text-xs">
                      <ErrorMessage name="password" component={"span"} />
                    </div>
                  </div>

                  <button
                    className="bg-[#3F7BF0] h-10  w-1/2 rounded-lg text-white font-bold transition-all hover:bg-[#3f6ef0]"
                    type="submit"
                  >
                    Log-in
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
