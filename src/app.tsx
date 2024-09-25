import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Home from "./pages/Home";

import { store } from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
    },
  ],
  {
    basename: "/english-card.react",
  }
);

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
