import React, { useContext, useState } from "react";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

const FormSignUp = () => {
  const { theme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="transition-all duration-300">
      <div className="mb-4">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="Tanzir Rahman"
          name="name"
        />
      </div>

      <div className="mb-4">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>

      <div className="mb-4 relative">
        <LabeledInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="*************"
          name="password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-[40px] right-3 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      <div className="mb-6">
        <p className="text-xs text-slate-500">
          By continuing, you agree to our{" "}
          <span
            className="font-bold cursor-pointer hover:underline transition-colors"
            style={{ color: theme.color }}
          >
            terms of service
          </span>
          .
        </p>
      </div>

      <Button
        type="submit"
        className="w-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: theme.color }}
      >
        Sign up
      </Button>

      <div className="my-6 flex items-center justify-center relative">
        <div className="border-t border-slate-300 w-full absolute"></div>
        <span className="px-3 bg-white relative z-10 text-slate-400 text-sm">
          or sign up with
        </span>
      </div>

      <Button
        variant="secondary"
        type="button"
        className="w-full bg-gray-100 text-slate-600 hover:bg-gray-200 transition-all"
      >
        <span className="flex items-center justify-center gap-2">
          Continue with Google
        </span>
      </Button>

      <p className="text-sm mt-5 text-center text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-bold hover:underline transition-colors"
          style={{ color: theme.color }}
        >
          Sign in here
        </Link>
      </p>
    </form>
  );
};

export default FormSignUp;
