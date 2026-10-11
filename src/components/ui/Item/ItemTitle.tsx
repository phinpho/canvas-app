import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ItemTitleProps = ComponentProps<"div">;

export const ItemTitle: FC<ItemTitleProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="item-title"
      {...props}
      className={cn(
        "line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4",
        className,
      )}
    />
  );
};

ItemTitle.displayName = "ItemTitle";
