"use client";

import type { ComponentProps, FC } from "react";
import { USERS } from "../../../constants/users.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { PageLayout } from "../Layout/PageLayout.js";
import { SignInUser } from "./SignInUser.js";

export type SignInProps = Omit<ComponentProps<typeof PageLayout>, "children">;

export const SignIn: FC<SignInProps> = ({ ...props }) => {
  const { status } = useAuth();

  return (
    <PageLayout {...props} className="[&>main]:justify-center">
      <div className="w-full md:w-3xl p-4 border border-border rounded-lg bg-background shadow-2xs bg-card text-card-foreground">
        <h1 className="text-2xl border-b mb-4 pb-2">Sign in</h1>
        {status === "signedIn" ? (
          <p>Redirecting...</p>
        ) : status === "loading" ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Please sign in to continue.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {USERS.map((user) => (
                <SignInUser key={user.username} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
};

SignIn.displayName = "SignIn";
