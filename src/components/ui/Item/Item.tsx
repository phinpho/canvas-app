"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";
import type { FC } from "react";
import { type ItemVariantProps, itemVariants } from "./itemVariants.js";

export type ItemProps = useRender.ComponentProps<"div"> & ItemVariantProps;

export const Item: FC<ItemProps> = ({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}) => {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ size, variant }), className),
        role: "listitem",
      },
      props,
    ),
    render,
    state: {
      size,
      slot: "item",
      variant,
    },
  });
};

Item.displayName = "Item";
