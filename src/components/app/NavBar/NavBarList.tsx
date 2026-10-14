"use client";

import { cn } from "cn";
import { MenuIcon, XIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { useIsMobile } from "../../../hooks/useIsMobile.js";
import { Button } from "../../ui/Button/Button.js";
import { NavBarPageTitle } from "./NavBarPageTitle.js";
import { NavBarTitle } from "./NavBarTitle.js";

export type NavBarListProps = Omit<
  ComponentProps<"nav">,
  "popover" | "popoverTarget" | "popoverTargetAction"
>;

export const NavBarList: FC<NavBarListProps> = ({
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
      {Boolean(title) && <NavBarPageTitle className="md:sr-only">{title}</NavBarPageTitle>}
      <nav
        {...props}
        aria-label={ariaLabel}
        className={cn(
          "md:ml-auto inset-0 w-full md:w-min md:inset-none h-full bg-transparent group/popover opacity-0 md:opacity-100 starting:open:opacity-0 md:starting:open:opacity-100 open:opacity-100 transition-all transition-discrete delay-0 duration-150 md:transition-none md:duration-0",
          className,
        )}
        hidden={isMobilePending}
        id={currentId}
        popover={isMobileState ? "auto" : undefined}
      >
        <Button
          aria-hidden="true"
          className="fixed w-full h-full inset-0 m-0 p-0 supports-backdrop-filter:backdrop-blur-xs rounded-none border-0 ring-0 shadow-none md:hidden bg-foreground/10 dark:bg-background/10 hover:bg-foreground/10 dark:hover:bg-background/10 focus:bg-foreground/10 dark:focus:bg-background/10 active:bg-foreground/10 dark:active:bg-background/10 user-select-none"
          popoverTarget={currentId}
          popoverTargetAction="hide"
          role="presentation"
          tabIndex={-1}
          variant="ghost"
        />
        <div className="outline-none fixed md:static w-full max-w-[calc(100%-2rem)] md:max-w-min md:w-min md:h-full top-1/2 md:top-none left-1/2 md:left-none flex flex-col md:inline-block -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 gap-4 md:gap-0 p-4 md:p-0 text-sm text-popover-foreground md:text-color md:text-inherit bg-popover md:bg-transparent rounded-xl md:rounded-none ring-1 ring-foreground/10 md:ring-0 duration-150 md:duration-0 animate-out md:animate-none fade-out-0 zoom-out-95 group-open/popover:animate-in group-open/popover:fade-in-0 group-open/popover:zoom-in-95">
          <NavBarTitle className="flex w-fit justify-start md:hidden" />
          <ul className="flex flex-col md:flex-row items-center justify-start md:justify-stretch w-full gap-4 md:gap-2 md:h-full">
            {children}
          </ul>
          <Button
            className="absolute top-2 right-2 md:hidden"
            popoverTarget={currentId}
            popoverTargetAction="hide"
            size="icon"
            variant="ghost"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </nav>
    </>
  );
};

NavBarList.displayName = "NavBarList";
