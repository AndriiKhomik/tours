import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const { accessToken } = await login({ ...values }).unwrap();
        dispatch(setCredentials({ accessToken }));
        resetForm();
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label={<FormattedMessage id="registration.form.label.name" />}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <TextField
          id="password"
          label={<FormattedMessage id="registration.form.label.password" />}
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit" variant="contained">
          <FormattedMessage id="registration.form.submit" />
        </Button>
      </form>
    </>
  );
};

export default Login;
