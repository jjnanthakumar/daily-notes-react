// React
import React from "react";
import ReactDOM from "react-dom/client";

// Global Styling
import "./index.css";

// App Component
import App from "./App";

// React Router
import { HashRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
