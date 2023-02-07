import React, {useEffect} from "react";
import {store} from "../../app/store";
import {toursApiSlice} from "../Tours/toursApiSlice";
import {Outlet} from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      toursApiSlice.util.prefetch("getTours", "toursList", {force: true}),
    );
  }, []);

  return <Outlet/>;
};

export default Prefetch;