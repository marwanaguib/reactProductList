import React from "react";
import { Provider } from "react-redux";

import ErrorBoundary from "./components/shared/ErrorBoundary";
import Routes from "./routes";
import store from "./store";
import { GlobalStyle } from "./assets/styles/common";

// Export application root
export default () => (
  <>
    <GlobalStyle />
    <ErrorBoundary>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ErrorBoundary>
  </>
);
