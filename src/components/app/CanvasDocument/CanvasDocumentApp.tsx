"use client";

import type { FC } from "react";
import { Outlet } from "react-router";
import { SignedIn } from "../../utils/SignedIn.js";

export const CanvasDocumentApp: FC = () => {
  return (
    <SignedIn>
      <Outlet />
    </SignedIn>
  );
};

CanvasDocumentApp.displayName = "CanvasDocumentApp";
