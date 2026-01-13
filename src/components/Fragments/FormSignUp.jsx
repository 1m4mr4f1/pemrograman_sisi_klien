import React, { useContext, useState } from "react";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormSignUp = ({ onSubmit }) => {
  const { theme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama wajib diisi"),
      email: Yup.string()
        .email("Format email salah")
        .required("Email wajib diisi"),
      password: Yup.string().required("Password wajib diisi"),
    }),
    onSubmit: async (values) => {
      await onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="transition-all duration-300">
      <div className="mb-4">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="Tanzir Rahman"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
        )}
      </div>

      <div className="mb-4">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-4 relative">
        <LabeledInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="*************"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.password}
          </div>
        )}
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
        disabled={formik.isSubmitting}
        className="w-full text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-50"
        style={{ backgroundColor: theme.color }}
      >
        {formik.isSubmitting ? "Loading..." : "Register"}
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