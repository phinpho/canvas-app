"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DropdownMenuLabelProps = ComponentProps<typeof MenuPrimitive.GroupLabel> & {
  inset?: boolean;
};

export const DropdownMenuLabel: FC<DropdownMenuLabelProps> = ({ className, inset, ...props }) => {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      {...props}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className,
      )}
      data-inset={inset}
    />
  );
};

DropdownMenuLabel.displayName = "DropdownMenuLabel";
