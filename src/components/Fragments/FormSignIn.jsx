import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await loginService(email, password);

    // 🔑 BACKEND KIRIM refreshToken
    login(result.refreshToken);

    navigate("/");
  } catch (err) {
    setError(err.msg || "Login gagal");
  }
};


  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {error && (
        <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
      )}

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
        className="w-full text-white"
        style={{ backgroundColor: theme.color }}
      >
        Login
      </Button>

      <p className="mt-5 text-sm text-center text-slate-500">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="font-bold"
          style={{ color: theme.color }}
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default FormSignIn;
