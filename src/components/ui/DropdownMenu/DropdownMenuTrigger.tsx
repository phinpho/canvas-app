"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { ComponentProps, FC } from "react";

export type DropdownMenuTriggerProps = ComponentProps<typeof MenuPrimitive.Trigger>;

export const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({ ...props }) => {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
};

DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
