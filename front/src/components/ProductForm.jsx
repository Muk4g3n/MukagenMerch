import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { useAddProductMutation } from "../app/endpoints/productEndpoints";
import { useColor } from "../hooks";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const { color } = useColor();
  const navigate = useNavigate();

  const [addProduct, { isLoading, error }] = useAddProductMutation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This is a required field"),
    color: Yup.string().required("This is a required field"),
  });

  const onSubmit = (body) => {
    // login(body)
    //   .unwrap()
    //   .then((user) => {
    //     setUser(user);
    //   })
    //   .catch((err) => toast.error(err.data.message));
    addProduct(body)
      .unwrap()
      .then((response) => {
        toast(response.message);
        navigate("/mydesigns");
      })
      .catch((err) => toast.error(err.data.message));
  };

  const initialValues = {
    name: "",
    color: color,
  };

  return (
    <div className=" h-[8rem] mr-12">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange
        enableReinitialize={true}
      >
        {() => (
          <Form className="flex flex-col w-full h-full justify-between">
            <div className="h-[30%] w-full">
              <label className="block mb-2 text-sm font-medium ">Name</label>
              <Field
                name="name"
                placeholder="Red Shirt"
                className="bg-gray-50 border border-gray-300 text-[#1E1E2B]  text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5"
              />
              <div className="text-red-600 text-xs">
                <ErrorMessage name="name" component={"span"} />
              </div>
            </div>
            <Field className="hidden" name="color" />
            <button
              className="bg-[#3F7BF0] h-10  w-1/2 rounded-lg text-white font-bold transition-all hover:bg-[#3f6ef0]"
              type="submit"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
