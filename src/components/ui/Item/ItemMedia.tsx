import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { type ItemMediaVariantProps, itemMediaVariants } from "./itemMediaVariants.js";

export type ItemMediaProps = ComponentProps<"div"> & ItemMediaVariantProps;

export const ItemMedia: FC<ItemMediaProps> = ({
  className,
  variant = "default",
  ...props
}: ItemMediaProps) => {
  return (
    <div
      data-slot="item-media"
      {...props}
      className={cn(itemMediaVariants({ variant }), className)}
      data-variant={variant}
    />
  );
};

ItemMedia.displayName = "ItemMedia";
