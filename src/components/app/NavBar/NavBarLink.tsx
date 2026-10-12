"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { NavLink, type NavLinkProps } from "react-router";
import { Button } from "../../ui/Button/Button.js";

export type NavBarLinkProps = ComponentProps<"li"> & {
  to: NavLinkProps["to"];
  viewTransition?: NavLinkProps["viewTransition"];
};

export const NavBarLink: FC<NavBarLinkProps> = ({
  to,
  viewTransition,
  children,
  className,
  ...props
}) => {
  return (
    <li
      {...props}
      className={cn(
        "has-aria-[current=page]:bg-primary has-aria-[current=page]:text-primary-foreground rounded-md",
        className,
      )}
    >
      <Button
        nativeButton={false}
        render={<NavLink to={to} viewTransition={viewTransition} />}
        variant="ghost"
      >
        {children}
      </Button>
    </li>
  );
};

NavBarLink.displayName = "NavBarLink";
