"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { ComponentProps, FC } from "react";

export type DropdownMenuProps = ComponentProps<typeof MenuPrimitive.Root>;

export const DropdownMenu: FC<DropdownMenuProps> = ({ ...props }) => {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};

DropdownMenu.displayName = "DropdownMenu";
