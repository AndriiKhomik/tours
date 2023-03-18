import React from "react";
import { Box, Button, IconButton, styled, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken } from "../../features/auth/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.text.primary}`,
  marginBottom: "32px",
}));

const NavButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    border: `1px solid ${theme.palette.text.primary}`,
  },
}));

const NavButton = ({ to, label }) => {
  return (
    <NavButtonStyled component={NavLink} to={to}>
      <FormattedMessage id={label} />
    </NavButtonStyled>
  );
};

const Header = () => {
  const auth = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  return (
    <Nav>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavButton to="/" label="main.navigation.home" />
        {!auth && <NavButton to="/login" label="main.navigation.login" />}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {auth && (
          <NavLink to="/personalPage">
            <IconButton sx={{ color: "white" }}>
              <Tooltip title={<FormattedMessage id="tooltip.userMenu" />}>
                <AccountCircle />
              </Tooltip>
            </IconButton>
          </NavLink>
        )}
        {auth && (
          <IconButton
            sx={{ color: "white" }}
            onClick={() => dispatch(logOut(null))}
          >
            <LogoutIcon />
          </IconButton>
        )}
      </Box>
    </Nav>
  );
};

export default Header;
