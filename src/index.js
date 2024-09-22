import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client"
import router from "./router";

import reportWebVitals from './reportWebVitals';

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();