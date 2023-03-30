import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isAdmin = false;
  let status = "User";

  if (token) {
    const decoded = jwtDecode(token);
    const { name, roles } = decoded.UserInfo;

    // isAdmin = roles.includes("Admin");
    // if (isAdmin) status = "Admin";

    return { name, roles, isAdmin };
  }
  return { name: "", roles: [], isAdmin };
};

export default useAuth;
