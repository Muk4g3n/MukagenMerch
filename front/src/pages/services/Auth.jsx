import React from "react";
import { FormikProvider, Form, useFormik } from "formik";

const Auth = ({
  message,
  initialValues,
  children,
  validationSchema,
  //   useMutation,
  then,
}) => {
  //   const [Auth, { isLoading }] = useMutation();
  // const { setUser } = useUser();
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   validateOnChange: true,
  //   onSubmit: (body) => {
  //     console.log(body);
  //   },
  // });
  // const { errors, touched, handleSubmit, getFieldProps, setFieldValue } =
  //   formik;
  // console.log(errors)
  const getError = (name) => touched[name] && errors[name];
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}></Form>
    </FormikProvider>
  );
};

export default Auth;
