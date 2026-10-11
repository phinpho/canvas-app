"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DropdownMenuSeparatorProps = ComponentProps<typeof MenuPrimitive.Separator>;

export const DropdownMenuSeparator: FC<DropdownMenuSeparatorProps> = ({ className, ...props }) => {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      {...props}
      className={cn("-mx-1 my-1 h-px bg-border", className)}
    />
  );
};

DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
