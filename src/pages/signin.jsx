import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

const SignInPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;
