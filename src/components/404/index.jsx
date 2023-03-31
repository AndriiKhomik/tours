import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.text.primary}`,
  padding: "8px 16px",
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: "8px ",
  display: "inline-block",
  marginTop: "32px",
}));

const NotFound = () => {
  return (
    <Box sx={{ padding: "48px" }}>
      <Typography variant="h4">
        <FormattedMessage id="page.not.found" />
      </Typography>
      <StyledLink to="/">
        <FormattedMessage id="redirect.home" />
      </StyledLink>
    </Box>
  );
};

export default NotFound;
