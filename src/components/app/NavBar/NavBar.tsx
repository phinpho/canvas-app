"use client";

import { cn } from "cn";
import { MenuIcon, XIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { useIsMobile } from "../../../hooks/useIsMobile.js";
import { Button } from "../../ui/Button/Button.js";
import { NavBarLink } from "./NavBarLink.js";
import { NavBarPageTitle } from "./NavBarPageTitle.js";
import { NavBarTitle } from "./NavBarTitle.js";
import { NavBarUserMenu } from "./NavBarUserMenu.js";

export type NavBarProps = Omit<ComponentProps<"div">, "children">;

export const NavBar: FC<NavBarProps> = ({ id, className, title = __APP_NAME__, ...props }) => {
  const currentId = useCurrentId(id);
  const isMobile = useIsMobile();

  return (
    <div
      {...props}
      className={cn(
        "flex flex-row items-center justify-between p-2 border-b border-sidebar-border bg-sidebar text-sidebar-foreground gap-2 h-12 md:h-14 lg:h-16",
        className,
      )}
      id={currentId}
    >
      <div className="flex flex-row items-center justify-start">
        <Button
          className="md:hidden"
          popoverTarget={`${currentId}-nav`}
          popoverTargetAction="show"
          size="icon-lg"
          variant="ghost"
        >
          <MenuIcon />
          <span className="sr-only">Menu</span>
        </Button>
        <NavBarTitle className="hidden md:flex" />
      </div>
      {Boolean(title) && <NavBarPageTitle className="md:hidden">{title}</NavBarPageTitle>}
      <nav
        aria-label="Main navigation"
        className="md:ml-auto inset-0 w-full md:w-min md:inset-none h-full bg-transparent"
        id={`${currentId}-nav`}
        popover={isMobile ? "auto" : undefined}
      >
        <Button
          className="w-full h-full absolute inset-0 bg-foreground/40 m-0 p-0 rounded-none border-0 ring-0 shadow-none md:hidden hover:bg-foreground/40 focus:bg-foreground/40 active:bg-foreground/40"
          popoverTarget={`${currentId}-nav`}
          popoverTargetAction="hide"
          variant="ghost"
        >
          <span className="sr-only">Close menu</span>
        </Button>
        <div className="absolute md:h-full md:w-min md:static inset-bs-16 md:inset-bs-none inset-x-4 md:inset-x-none p-4 md:p-0 border border-sidebar bg-sidebar md:bg-transparent rounded-lg md:rounded-none shadow-lg md:shadow-none">
          <div className="flex flex-row items-center justify-between mb-4 border-b border-sidebar-border pb-2 md:hidden">
            <NavBarTitle />
            <Button
              popoverTarget={`${currentId}-nav`}
              popoverTargetAction="hide"
              size="icon"
              variant="ghost"
            >
              <XIcon />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <ul className="flex flex-col md:flex-row items-center justify-start md:justify-stretch w-full gap-4 md:gap-2 md:h-full">
            <NavBarLink to="/" viewTransition>
              Home
            </NavBarLink>
            <NavBarLink to="/document" viewTransition>
              Documents
            </NavBarLink>
          </ul>
        </div>
      </nav>
      <NavBarUserMenu />
    </div>
  );
};

NavBar.displayName = "NavBar";
