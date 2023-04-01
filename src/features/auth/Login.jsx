import React from "react";
import Header from "../../components/Header/Header";
import RegistrationTabs from "./RegistrationTabs";
import { Grid } from "@mui/material";

const Login = () => {
  return (
    <>
      <Header />
      <Grid container sx={{ justifyContent: "center" }}>
        <RegistrationTabs />
      </Grid>
    </>
  );
};

export default Login;
