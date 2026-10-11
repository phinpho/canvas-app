"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type SelectGroupProps = ComponentProps<typeof SelectPrimitive.Group>;

export const SelectGroup: FC<SelectGroupProps> = ({ className, ...props }) => {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      {...props}
      className={cn("scroll-my-1 p-1", className)}
    />
  );
};

SelectGroup.displayName = "SelectGroup";
