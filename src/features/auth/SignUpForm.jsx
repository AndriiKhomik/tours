import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePersist from "../../hooks/usePersist";
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
import { useCreateUserMutation } from "../PersonalPage/usersApiSlice";
import { setCredentials } from "./authSlice";

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

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const [persist, setPersist] = usePersist();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      isChecked: true,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const { accessToken } = await createUser({ ...values }).unwrap;
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
        sx={styles}
        label={
          <Typography>
            <FormattedMessage id="registration.form.label.name" />
          </Typography>
        }
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="email"
        name="email"
        type="email"
        sx={styles}
        label={
          <Typography>
            <FormattedMessage id="registration.form.label.email" />
          </Typography>
        }
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        sx={styles}
        label={
          <Typography>
            <FormattedMessage id="registration.form.label.password" />
          </Typography>
        }
        onChange={formik.handleChange}
        value={formik.values.password}
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

export default SignUpForm;
