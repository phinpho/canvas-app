"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type SelectSeparatorProps = ComponentProps<typeof SelectPrimitive.Separator>;

export const SelectSeparator: FC<SelectSeparatorProps> = ({ className, ...props }) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      {...props}
      className={cn("bg-border -mx-1 my-1 h-px pointer-events-none", className)}
    />
  );
};

SelectSeparator.displayName = "SelectSeparator";
