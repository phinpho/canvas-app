"use client";

import { MenuIcon, XIcon } from "lucide-react";
import type { ComponentProps, FC, ReactNode } from "react";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { useIsMobile } from "../../../hooks/useIsMobile.js";
import { Button } from "../../ui/Button/Button.js";
import { NavBarPageTitle } from "./NavBarPageTitle.js";
import { NavBarTitle } from "./NavBarTitle.js";

export type NavBarListProps = Omit<
  ComponentProps<"nav">,
  "popover" | "popoverTarget" | "popoverTargetAction"
> & {
  appTitle?: ReactNode;
};

export const NavBarList: FC<NavBarListProps> = ({
  appTitle,
  id,
  className,
  children,
  title,
  "aria-label": ariaLabel = "Main navigation",
  ...props
}) => {
  const currentId = useCurrentId(id);
  const [isMobilePending, isMobileState] = useIsMobile(true);

  return (
    <>
      <div className="flex flex-row items-center justify-start">
        <Button
          className="md:hidden"
          popoverTarget={currentId}
          popoverTargetAction="show"
          size="icon-lg"
          variant="ghost"
        >
          <MenuIcon />
          <span className="sr-only">Menu</span>
        </Button>
        <NavBarTitle className="hidden md:flex" />
      </div>
      {!isMobilePending && isMobileState && Boolean(title) && (
        <NavBarPageTitle>{title}</NavBarPageTitle>
      )}
      <nav
        {...props}
        aria-label={ariaLabel}
        className="md:ml-auto inset-0 w-full md:w-min md:inset-none h-full bg-transparent"
        hidden={isMobilePending}
        id={currentId}
        popover={isMobileState ? "auto" : undefined}
      >
        <Button
          aria-hidden="true"
          className="w-full h-full absolute inset-0 bg-foreground/40 m-0 p-0 rounded-none border-0 ring-0 shadow-none md:hidden hover:bg-foreground/40 focus:bg-foreground/40 active:bg-foreground/40"
          popoverTarget={currentId}
          popoverTargetAction="hide"
          role="presentation"
          tabIndex={-1}
          variant="ghost"
        />
        <div className="absolute md:h-full md:w-min md:static inset-bs-16 md:inset-bs-none inset-x-4 md:inset-x-none p-4 md:p-0 border border-sidebar bg-sidebar md:bg-transparent md:text-inherit rounded-lg md:rounded-none shadow-lg md:shadow-none">
          <div className="flex flex-row items-center justify-between mb-4 border-b border-sidebar-border pb-2 md:hidden">
            <NavBarTitle className="flex md:hidden" />
            <Button
              className="text-foreground"
              popoverTarget={currentId}
              popoverTargetAction="hide"
              size="icon"
              variant="ghost"
            >
              <XIcon />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <ul className="flex flex-col md:flex-row items-center justify-start md:justify-stretch w-full gap-4 md:gap-2 md:h-full">
            {children}
          </ul>
        </div>
      </nav>
    </>
  );
};

NavBarList.displayName = "NavBarList";
