import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

const SignInPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      
      {/* Branding / Title */}
      <div className="mb-8 text-center">
        <h1
          className="
            text-3xl font-bold
            opacity-0 translate-y-4
            animate-[fadeInUp_0.8s_ease-out_forwards]
          "
        >
          <span className="text-blue-600">Fine</span>{" "}
          <span className="text-slate-800">Bank</span>
        </h1>

        <p
          className="
            mt-2 text-sm text-slate-500
            opacity-0
            animate-[fadeIn_1s_ease-out_forwards]
            animate-delay-200
          "
        >
          Welcome back, please sign in to your account
        </p>
      </div>

      {/* Form */}
      <FormSignIn />

    </AuthLayout>
  );
};

export default SignInPage;
