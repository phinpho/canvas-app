import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { NavBar } from "../NavBar/NavBar.js";

export type PageLayoutProps = ComponentProps<"div"> & {
  hideNavBar?: boolean;
};

export const PageLayout: FC<PageLayoutProps> = ({
  className,
  children,
  title,
  hideNavBar = false,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "relative w-full h-full flex flex-col-reverse items-stretch justify-between overflow-hidden",
        className,
      )}
    >
      <main className="w-full grow-1 p-4 overflow-auto flex flex-col items-center justify-start">
        {children}
      </main>
      {!hideNavBar && <NavBar className="shrink-1" title={title} />}
    </div>
  );
};

PageLayout.displayName = "PageLayout";
