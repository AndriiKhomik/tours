import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import background from "./bg.jpg";

const StyledLink = styled(Link)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  textDecoration: "none",
  fontSize: "18px",
  display: "inline-block",
  marginLeft: "50%",
  transform: "translate(-50%)",
  marginTop: "24px",
  border: "1px solid #fff",
  borderRadius: "8px",
  padding: "8px 16px",
}));

const PublicPage = () => {
  return (
    <>
      <Typography align="center" variant="h3" pt={3}>
        <FormattedMessage id="welcome.title" />
      </Typography>
      <StyledLink to="/login">
        <FormattedMessage id="login.button" />
      </StyledLink>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      ></Box>
    </>
  );
};

export default PublicPage;
