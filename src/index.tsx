import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { I18nProvider, LOCALES } from "./i18n";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <I18nProvider locale={LOCALES.ENGLISH}>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </BrowserRouter>
          </I18nProvider>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
