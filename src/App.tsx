import React from "react";
import { Route, Routes } from "react-router-dom";
import Tours from "./features/Tours/Tours";
import Login from "./features/auth/Login";
import PersonalPage from "./pages/PersonalPage";
import TourPage from "./pages/TourPage";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Prefetch />}> */}
      {/*public route*/}
      <Route path="/">
        <Route index element={<Tours />} />
        <Route path="/tours/:id" element={<TourPage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="personalPage" element={<PersonalPage />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;
