import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StyledEngineProvider, ThemeProvider} from "@mui/material";
import theme from "./theme";


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);

