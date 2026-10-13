import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type NavBarPageTitleProps = ComponentProps<"h1">;

export const NavBarPageTitle: FC<NavBarPageTitleProps> = ({ className, children, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        "text-lg lg:text-xl font-bold text-center h-full flex items-center justify-center",
        className,
      )}
    >
      {children}
    </h1>
  );
};

NavBarPageTitle.displayName = "NavBarPageTitle";
