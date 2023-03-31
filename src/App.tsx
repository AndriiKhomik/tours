import React from "react";
import { Route, Routes } from "react-router-dom";
import ToursList from "./features/Tours";
import Login from "./features/auth/Login";
import PersonalPage from "./features/PersonalPage";
import TourPage from "./features/TourPage";
import PersistLogin from "./features/auth/PersistLogin";
import Layout from "./components/Layout";
import PublicPage from "./components/PublicPage";
import RequireAuth from "./features/auth/RequireAuth";
import NotFound from "./components/404";
import { ROLES } from "./config/roles";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public route*/}
        <Route index element={<PublicPage />} />
        <Route path="login" element={<Login />} />

        {/* private route */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route
              element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}
            >
              <Route path="/tours">
                <Route index element={<ToursList />} />
                <Route path=":id" element={<TourPage />} />
              </Route>
              <Route path="personalPage" element={<PersonalPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
