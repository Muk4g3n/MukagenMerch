import React from "react";
import { useUser } from "../hooks";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { Link } from "react-router-dom";
import { lazy } from "react";
import { useRegisterMutation } from "../app/endpoints/userEndpoints";
import { toast } from "react-toastify";

const CanvasModel = lazy(() => import("../canvas"));

const Register = () => {
  const { user, setUser } = useUser();
  const [register, { isLoading }] = useRegisterMutation();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("This is a required field")
      .min(6, "Please enter a valid Username"),

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
    register(body)
      .unwrap()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => toast.error(err.data.message));
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="w-[40%] h-full bg-[#1E1E2B] flex  items-center justify-center">
        <div className="w-[70%] h-[80%] text-white flex flex-col items-center mt-6">
          <div className="flex w-[80%] items-center justify-between ">
            <h1>Mukagen</h1>
            <Link to={"/login"}>
              <h2 className="text-[#3F7BF0] font-bold hover:text-[#3f6ef0]">
                Sign-in
              </h2>
            </Link>
          </div>
          <h1 className="text-4xl w-[80%] mt-2">SIGN-IN</h1>
          <div className="w-[80%] h-[1px] bg-white mt-12 rounded-lg"></div>
          <div className="w-[80%] h-[60%]  mt-4">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {() => (
                <Form className="flex flex-col w-full h-full justify-between">
                  {/* input field */}
                  <div className="h-[30%] w-full">
                    <label className="block mb-2 text-sm font-medium ">
                      Name
                    </label>
                    <Field
                      name="name"
                      placeholder="name"
                      className="bg-gray-50 border border-gray-300 text-[#1E1E2B] text-sm rounded-lg focus:ring-blue-500
                       focus:border-blue-500 block w-full p-2.5"
                    />
                    <div className="text-red-600 text-xs mt-1">
                      <ErrorMessage name="name" component={"span"} />
                    </div>
                  </div>

                  {/* input field */}
                  <div className="h-[30%] w-full">
                    <label className="block mb-2 text-sm font-medium ">
                      Email
                    </label>
                    <Field
                      name="email"
                      placeholder="email@xyz.com"
                      className="bg-gray-50 border border-gray-300 text-[#1E1E2B] text-sm rounded-lg focus:ring-blue-500
                       focus:border-blue-500 block w-full p-2.5"
                    />
                    <div className="text-red-600 text-xs mt-1">
                      <ErrorMessage name="email" component={"span"} />
                    </div>
                  </div>

                  {/* input field */}
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
                    <div className="text-red-600 text-xs mt-1">
                      <ErrorMessage name="password" component={"span"} />
                    </div>
                  </div>

                  <button
                    className="bg-[#3F7BF0] h-10 w-1/2 rounded-lg text-white font-bold transition-all hover:bg-[#3f6ef0]"
                    type="submit"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full">
        <CanvasModel targetRotation={[0, -0.2, 0]} />
      </div>
    </div>
  );
};

export default Register;
