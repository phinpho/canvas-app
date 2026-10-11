"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { ComponentProps, FC } from "react";

export type DropdownMenuPortalProps = ComponentProps<typeof MenuPrimitive.Portal>;

export const DropdownMenuPortal: FC<DropdownMenuPortalProps> = ({ ...props }) => {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
};

DropdownMenuPortal.displayName = "DropdownMenuPortal";
