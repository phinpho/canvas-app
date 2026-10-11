"use client";

import { type FC, type PropsWithChildren, useEffect, useEffectEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth.js";

export type SignedInProps = PropsWithChildren<{
  next?: string;
}>;

export const SignedIn: FC<SignedInProps> = ({ children, next }) => {
  const { status } = useAuth();
  const navigate = useNavigate();

  const redirectToLogin = useEffectEvent(() => {
    navigate("/login", { replace: true, state: { next: next ?? globalThis.location.pathname } });
  });

  useEffect(() => {
    if (status === "signedOut") {
      redirectToLogin();
    }
  }, [status]);

  if (status === "signedIn") return children;
  return null;
};

SignedIn.displayName = "SignedIn";
