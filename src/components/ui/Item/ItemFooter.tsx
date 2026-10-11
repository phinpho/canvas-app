import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ItemFooterProps = ComponentProps<"div">;

export const ItemFooter: FC<ItemFooterProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="item-footer"
      {...props}
      className={cn("flex basis-full items-center justify-between gap-2", className)}
    />
  );
};

ItemFooter.displayName = "ItemFooter";
