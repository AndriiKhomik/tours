import React from "react";
import { Route, Routes } from "react-router-dom";
import Tours from "./features/Tours/Tours";
import Login from "./features/auth/Login";
import PersonalPage from "./features/PersonalPage/PersonalPage";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Prefetch />}> */}
      {/*public route*/}
      <Route index element={<Tours />} />
      <Route path="login" element={<Login />} />
      <Route path="personalPage" element={<PersonalPage />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;
