"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { ComponentProps, FC } from "react";

export type DropdownMenuSubProps = ComponentProps<typeof MenuPrimitive.SubmenuRoot>;

export const DropdownMenuSub: FC<DropdownMenuSubProps> = ({ ...props }) => {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
};

DropdownMenuSub.displayName = "DropdownMenuSub";
