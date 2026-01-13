import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import halaman yang sudah ada
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/BalancePage";
import ErrorPage from "./pages/404";

// 1. IMPORT HALAMAN EXPENSE (Soal No. 3)
import ExpensePage from "./pages/ExpensePage";

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
    // 2. TAMBAHKAN ROUTE UNTUK EXPENSES DI SINI
    {
      path: "/expenses",
      element: <ExpensePage />,
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