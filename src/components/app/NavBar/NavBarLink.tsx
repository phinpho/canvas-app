"use client";

import type { ComponentProps, FC } from "react";
import { NavLink, type NavLinkProps } from "react-router";
import { Button } from "../../ui/Button/Button.js";

export type NavBarLinkProps = ComponentProps<"li"> & {
  to: NavLinkProps["to"];
  viewTransition?: NavLinkProps["viewTransition"];
};

export const NavBarLink: FC<NavBarLinkProps> = ({ to, viewTransition, children, ...props }) => {
  return (
    <li {...props}>
      <Button
        className="text-foreground aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground dark:aria-[current=page]:bg-primary dark:aria-[current=page]:text-primary-foreground"
        nativeButton={false}
        render={<NavLink to={to} viewTransition={viewTransition} />}
        role="link"
        variant="ghost"
      >
        {children}
      </Button>
    </li>
  );
};

NavBarLink.displayName = "NavBarLink";
