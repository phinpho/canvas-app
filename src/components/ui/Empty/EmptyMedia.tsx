import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { type EmptyMediaVariantProps, emptyMediaVariants } from "./emptyMediaVariants.js";

export type EmptyMediaProps = ComponentProps<"div"> & EmptyMediaVariantProps;

export const EmptyMedia: FC<EmptyMediaProps> = ({ className, variant = "default", ...props }) => {
  return (
    <div
      data-slot="empty-media"
      {...props}
      className={cn(emptyMediaVariants({ variant }), className)}
      data-variant={variant}
    />
  );
};

EmptyMedia.displayName = "EmptyMedia";
