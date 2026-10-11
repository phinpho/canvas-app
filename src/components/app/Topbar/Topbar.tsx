import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type TopbarProps = ComponentProps<"div">;

export const Topbar: FC<TopbarProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "absolute bg-background border boder-1 border-border rounded h-auto top-1 shadow-2xs",
        className,
      )}
    />
  );
};

Topbar.displayName = "Topbar";
