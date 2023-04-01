import React from "react";
import {
  Box,
  Button,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken } from "../../features/auth/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../hooks/useAuth";
import usePersist from "../../hooks/usePersist";

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
    // border: `1px solid ${theme.palette.text.primary}`,
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
  const navigate = useNavigate();
  const { name } = useAuth();
  const [persist, setPersist] = usePersist();

  const handleLogout = async () => {
    await setPersist(false);
    dispatch(logOut(null));
    navigate("/");
  };

  return (
    <Nav>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavButton to="/tours" label="main.navigation.tours" />
        {!auth && <NavButton to="/login" label="main.navigation.login" />}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>{name}</Typography>
        {auth && (
          <NavLink to="/personalPage">
            <IconButton sx={{ color: "white" }}>
              <AccountCircle />
            </IconButton>
          </NavLink>
        )}
        {auth && (
          <IconButton sx={{ color: "white" }} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        )}
      </Box>
    </Nav>
  );
};

export default Header;
