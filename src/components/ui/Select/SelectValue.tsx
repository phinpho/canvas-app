"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;

export const SelectValue: FC<SelectValueProps> = ({ className, ...props }) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      {...props}
      className={cn("flex flex-1 text-left", className)}
    />
  );
};

SelectValue.displayName = "SelectValue";
