"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { USERS } from "../../../constants/users.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { PageCard } from "../Layout/PageCard.js";
import { PageCardTitle } from "../Layout/PageCardTitle.js";
import { PageLayout } from "../Layout/PageLayout.js";
import { SignInUser } from "./SignInUser.js";

export type SignInProps = Omit<ComponentProps<typeof PageLayout>, "children">;

export const SignIn: FC<SignInProps> = ({ className, ...props }) => {
  const { status } = useAuth();

  return (
    <PageLayout {...props} className={cn("[&>main]:justify-center", className)}>
      <PageCard>
        <PageCardTitle>Sign in</PageCardTitle>
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
      </PageCard>
    </PageLayout>
  );
};

SignIn.displayName = "SignIn";
