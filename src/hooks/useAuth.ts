import { use } from "react";
import { AuthContext } from "../contexts/AuthContext.js";

export const useAuth = () => {
  const authContext = use(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }

  return authContext;
};
