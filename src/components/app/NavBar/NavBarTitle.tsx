import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { NavLink, type NavLinkProps } from "react-router";

export type NavBarTitleProps = Omit<ComponentProps<typeof NavLink>, "children" | "to"> & {
  to?: NavLinkProps["to"];
};

export const NavBarTitle: FC<NavBarTitleProps> = ({
  to = "/",
  end = true,
  viewTransition = true,
  className,
  ...props
}) => {
  return (
    <NavLink
      {...props}
      className={cn("flex flex-row items-center justify-center h-full gap-1", className)}
      end={end}
      to={to}
      viewTransition={viewTransition}
    >
      <img
        alt=""
        className="inline-block size-10 object-center rounded-lg"
        src="/pwa-512x512.png"
      />
      <span className="text-xl lg:text-2xl font-bold h-full text-card-foreground dark:text-card-foreground">
        {__APP_NAME__}
      </span>
    </NavLink>
  );
};

NavBarTitle.displayName = "NavBarTitle";
