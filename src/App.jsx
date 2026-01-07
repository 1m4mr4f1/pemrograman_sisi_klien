import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/BalancePage";
import ErrorPage from "./pages/404";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
