"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../../hooks/useAuth.js";
import { NavBarUserMenu } from "./NavBarUserMenu.js";

export type NavBarProps = Omit<ComponentProps<"div">, "children">;

export const NavBar: FC<NavBarProps> = ({ className, ...props }) => {
  const { status } = useAuth();
  return (
    <div
      {...props}
      className={cn(
        "flex flex-row items-center justify-between p-2 border-b border-border bg-accent",
        className,
      )}
    >
      <NavLink
        className="flex flex-row items-center justify-center gap-1"
        end
        to="/"
        viewTransition
      >
        <img
          alt="logo"
          className="inline-block size-10 object-center rounded-lg"
          src="/pwa-512x512.png"
        />
        <span className="text-2xl font-bold">{__APP_NAME__}</span>
      </NavLink>
      <nav>
        <ul className="flex flex-row items-center gap-2">
          <li className="p-2 has-aria-[current=page]:bg-primary has-aria-[current=page]:text-primary-foreground rounded-md">
            <NavLink to="/" viewTransition>
              Home
            </NavLink>
          </li>
          <li className="p-2 has-aria-[current=page]:bg-primary has-aria-[current=page]:text-primary-foreground rounded-md">
            <NavLink to="/document" viewTransition>
              Documents
            </NavLink>
          </li>
          <li className="p-2 has-aria-[current=page]:bg-primary has-aria-[current=page]:text-primary-foreground rounded-md">
            {status === "signedOut" ? (
              <NavLink to="/login" viewTransition>
                Sign in
              </NavLink>
            ) : (
              <NavBarUserMenu />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.displayName = "NavBar";
