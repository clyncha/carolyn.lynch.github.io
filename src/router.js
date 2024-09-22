import {
  createBrowserRouter,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./index.css";

import Contact from "./pages/Contact.tsx";
import Error from "./pages/Error.tsx";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Navbar from "./Navbar.tsx";
import { PAGE, PAGE_ROUTE } from "./constants/routes.ts";

// TODO Wrap theme provider around here
function PageWrapper() {
  return (
      <>
        <Navbar />
        <Outlet />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <PageWrapper/>,
    errorElement: <Error />,
    children: [
    {
      path: PAGE_ROUTE[PAGE.HOME],
      element: <Home/>,
    },
    {
      path: PAGE_ROUTE[PAGE.CONTACT],
      element: <Contact/>,
    },
    {
      path: PAGE_ROUTE[PAGE.PROJECTS],
      element: <Projects/>,
    },
  ]
  }
]);

export default router;