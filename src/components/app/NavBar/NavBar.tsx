import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { NavBarLink } from "./NavBarLink.js";
import { NavBarList } from "./NavBarList.js";
import { NavBarUserMenu } from "./NavBarUserMenu.js";

export type NavBarProps = Omit<ComponentProps<"div">, "children">;

export const NavBar: FC<NavBarProps> = ({ className, title = __APP_NAME__, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-row items-center justify-between p-2 border-b border-sidebar-border bg-sidebar text-sidebar-foreground gap-2 h-12 md:h-14 lg:h-16",
        className,
      )}
    >
      <NavBarList title={title}>
        <NavBarLink to="/" viewTransition>
          Home
        </NavBarLink>
        <NavBarLink to="/document" viewTransition>
          Documents
        </NavBarLink>
      </NavBarList>
      <NavBarUserMenu />
    </div>
  );
};

NavBar.displayName = "NavBar";
