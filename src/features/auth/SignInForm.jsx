import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useNavigate } from "react-router-dom";
import usePersist from "../../hooks/usePersist";

const styles = {
  marginBottom: "8px",
  "& label": {
    marginBottom: "4px",
  },
  "& input": {
    border: "1px solid white",
    borderRadius: "8px",
    padding: "12px",
  },
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const [persist, setPersist] = usePersist();

  const formik = useFormik({
    initialValues: {
      name: "Metallica",
      password: "!Pass1",
      isChecked: true,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const { accessToken } = await login({ ...values }).unwrap();
        dispatch(setCredentials({ accessToken }));
        resetForm();
        navigate("/tours");
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label={
          <Typography>
            <FormattedMessage id="registration.form.label.name" />
          </Typography>
        }
        onChange={formik.handleChange}
        value={formik.values.name}
        sx={styles}
      />
      <TextField
        id="password"
        label={
          <Typography>
            <FormattedMessage id="registration.form.label.password" />
          </Typography>
        }
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        sx={styles}
      />
      <FormGroup>
        <FormControlLabel
          sx={{
            "& .css-1su2se6-MuiButtonBase-root-MuiCheckbox-root.Mui-checked+.MuiTypography-root":
              { fontWeight: 400 },
          }}
          control={
            <Checkbox
              id="trustDevice"
              name="trustDevice"
              color="default"
              value={persist}
              onChange={() => setPersist((prev) => !prev)}
              defaultChecked
            />
          }
          label={
            <Typography>
              <FormattedMessage id="registration.form.trust.device" />
            </Typography>
          }
        />
      </FormGroup>
      <Button
        sx={{ color: "white", borderColor: "white" }}
        type="submit"
        variant="outlined"
      >
        <FormattedMessage id="registration.form.submit" />
      </Button>
    </form>
  );
};

export default SignInForm;
