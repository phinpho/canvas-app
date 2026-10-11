import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ItemDescriptionProps = ComponentProps<"p">;

export const ItemDescription: FC<ItemDescriptionProps> = ({ className, ...props }) => {
  return (
    <p
      data-slot="item-description"
      {...props}
      className={cn(
        "line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
    />
  );
};

ItemDescription.displayName = "ItemDescription";
