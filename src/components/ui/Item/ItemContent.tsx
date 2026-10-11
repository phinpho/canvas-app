import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ItemContentProps = ComponentProps<"div">;

export const ItemContent: FC<ItemContentProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="item-content"
      {...props}
      className={cn(
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none",
        className,
      )}
    />
  );
};

ItemContent.displayName = "ItemContent";
