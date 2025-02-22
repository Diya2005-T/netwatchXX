import React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const SignInForm = () => {
  return (
    <div className="space-y-6">
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
      <Button>SIGN IN</Button>
    </div>
  );
};