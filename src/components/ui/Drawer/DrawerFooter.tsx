import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DrawerFooterProps = ComponentProps<"div">;

export const DrawerFooter: FC<DrawerFooterProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="drawer-footer"
      {...props}
      className={cn("mt-auto flex shrink-0 flex-col gap-2 p-4 pt-0", className)}
    />
  );
};

DrawerFooter.displayName = "DrawerFooter";
