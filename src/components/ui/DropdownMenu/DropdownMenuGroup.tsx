"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { ComponentProps, FC } from "react";

export type DropdownMenuGroupProps = ComponentProps<typeof MenuPrimitive.Group>;

export const DropdownMenuGroup: FC<DropdownMenuGroupProps> = ({ ...props }) => {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
};

DropdownMenuGroup.displayName = "DropdownMenuGroup";
