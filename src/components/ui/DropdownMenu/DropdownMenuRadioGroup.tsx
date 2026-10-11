"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { ComponentProps, FC } from "react";

export type DropdownMenuRadioGroupProps = ComponentProps<typeof MenuPrimitive.RadioGroup>;

export const DropdownMenuRadioGroup: FC<DropdownMenuRadioGroupProps> = ({ ...props }) => {
  return <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
};

DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";
