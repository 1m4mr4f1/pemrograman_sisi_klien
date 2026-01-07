import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { ThemeContext } from "../../context/themeContext";
import { loginService } from "../../services/authService";
import { AuthContext } from "../../context/authContext";

const FormSignIn = () => {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await loginService(email, password);
      login(result.refreshToken);

      setSnackbar({
        open: true,
        message: "Login berhasil",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg || "Email atau password salah",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="w-full transition-all duration-300"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <LabeledInput
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <CheckBox label="Keep me signed in" />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
          style={{ backgroundColor: theme.color }}
        >
          {loading ? "Signing in..." : "Login"}
        </Button>

        <p className="mt-5 text-sm text-center text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-bold hover:underline transition-colors"
            style={{ color: theme.color }}
          >
            Sign up
          </Link>
        </p>
      </form>

      {/* MUI Snackbar Feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormSignIn;
