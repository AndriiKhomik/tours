import React from "react";
import { Route, Routes } from "react-router-dom";
import Tours from "./features/Tours/Tours";
import Login from "./features/auth/Login";
import PersonalPage from "./pages/PersonalPage";
import TourPage from "./pages/TourPage";
import PersistLogin from "./features/auth/PersistLogin";

const App = () => {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        {/*public route*/}
        <Route path="/">
          <Route index element={<Tours />} />
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
