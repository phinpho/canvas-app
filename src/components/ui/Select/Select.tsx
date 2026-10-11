"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import type { ComponentProps, FC } from "react";

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root>;

export const Select: FC<SelectProps> = ({ ...props }) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

Select.displayName = "Select";
