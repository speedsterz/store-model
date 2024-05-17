"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

type probs = {
  children: React.ReactNode;
};
const AuthProvider = ({ children }: probs) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
