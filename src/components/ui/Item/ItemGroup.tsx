"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";
import type { FC } from "react";

export type ItemGroupProps = useRender.ComponentProps<"div">;

export const ItemGroup: FC<ItemGroupProps> = ({ className, render, ...props }) => {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
          className,
        ),
        role: "list",
      },
      props,
    ),
    render,
    state: {
      slot: "item-group",
    },
  });
};

ItemGroup.displayName = "ItemGroup";
