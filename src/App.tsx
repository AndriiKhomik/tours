import React from "react";
import { Route, Routes } from "react-router-dom";
import ToursList from "./features/Tours";
import Login from "./features/auth/Login";
import PersonalPage from "./features/PersonalPage";
import TourPage from "./features/TourPage";
import PersistLogin from "./features/auth/PersistLogin";

const App = () => {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        {/*public route*/}
        <Route path="/">
          <Route index element={<ToursList />} />
          <Route path="/tours/:id" element={<TourPage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="personalPage" element={<PersonalPage />} />
        {/* </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
