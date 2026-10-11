"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type SelectLabelProps = ComponentProps<typeof SelectPrimitive.GroupLabel>;

export const SelectLabel: FC<SelectLabelProps> = ({ className, ...props }) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      {...props}
      className={cn("text-muted-foreground px-1.5 py-1 text-xs", className)}
    />
  );
};

SelectLabel.displayName = "SelectLabel";
