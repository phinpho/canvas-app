import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ItemHeaderProps = ComponentProps<"div">;

export const ItemHeader: FC<ItemHeaderProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="item-header"
      {...props}
      className={cn("flex basis-full items-center justify-between gap-2", className)}
    />
  );
};

ItemHeader.displayName = "ItemHeader";
