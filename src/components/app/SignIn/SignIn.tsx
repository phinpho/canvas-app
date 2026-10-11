"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { USERS } from "../../../constants/users.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { NavBar } from "../NavBar/NavBar.js";
import { SignInUser } from "./SignInUser.js";

export type SignInProps = Omit<ComponentProps<"main">, "children">;

export const SignIn: FC<SignInProps> = ({ className, ...props }) => {
  const { status } = useAuth();

  return (
    <main {...props} className={cn("relative w-full h-full overflow-auto", className)}>
      <NavBar />
      <div className="w-3xl mt-10 mx-auto p-4 border border-border rounded-lg bg-background shadow-2xs">
        <h1 className="text-2xl border-b">Sign in</h1>
        {status === "signedIn" ? (
          <p>Redirecting...</p>
        ) : status === "loading" ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Please sign in to continue.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {USERS.map((user) => (
                <SignInUser key={user.username} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

SignIn.displayName = "SignIn";
