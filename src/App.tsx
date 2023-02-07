import React from "react";
import {Route, Routes} from "react-router-dom";
import Tours from "./features/Tours";
import Prefetch from "./features/auth/Prefetch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Prefetch/>}>
        {/*public route*/}
        <Route index element={<Tours/>}/>
      </Route>
    </Routes>
  );
};

export default App;
