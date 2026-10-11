import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DrawerHeaderProps = ComponentProps<"div">;

export const DrawerHeader: FC<DrawerHeaderProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="drawer-header"
      {...props}
      className={cn(
        "flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center md:gap-1.5 md:text-left",
        className,
      )}
    />
  );
};

DrawerHeader.displayName = "DrawerHeader";
