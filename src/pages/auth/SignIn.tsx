import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { SignInForm } from "../../components/auth/SignInForm";

export const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};