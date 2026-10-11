import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Separator } from "../Separator/Separator.js";

export type ItemSeparatorProps = ComponentProps<typeof Separator>;

export const ItemSeparator: FC<ItemSeparatorProps> = ({
  className,
  orientation = "horizontal",
  ...props
}) => {
  return (
    <Separator
      data-slot="item-separator"
      {...props}
      className={cn("my-2", className)}
      orientation={orientation}
    />
  );
};

ItemSeparator.displayName = "ItemSeparator";
