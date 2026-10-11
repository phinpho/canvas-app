"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";
import type { FC } from "react";
import { type BadgeVariantProps, badgeVariants } from "./badgeVariants.js";

export type BadgeProps = useRender.ComponentProps<"span"> & BadgeVariantProps;

export const Badge: FC<BadgeProps> = ({ className, variant = "default", render, ...props }) => {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
};

Badge.displayName = "Badge";
