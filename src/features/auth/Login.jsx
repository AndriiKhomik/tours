import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import usePersist from "../../hooks/usePersist";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const [persist, setPersist] = usePersist();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      isChecked: false,
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
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="trustDevice"
                name="trustDevice"
                value={persist}
                onChange={() => setPersist((prev) => !prev)}
              />
            }
            label={<FormattedMessage id="registration.form.trust.device" />}
          />
        </FormGroup>
        <Button type="submit" variant="contained">
          <FormattedMessage id="registration.form.submit" />
        </Button>
      </form>
    </>
  );
};

export default Login;
