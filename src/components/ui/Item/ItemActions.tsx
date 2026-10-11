import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ItemActionsProps = ComponentProps<"div">;

export const ItemActions: FC<ItemActionsProps> = ({ className, ...props }) => {
  return (
    <div data-slot="item-actions" {...props} className={cn("flex items-center gap-2", className)} />
  );
};

ItemActions.displayName = "ItemActions";
