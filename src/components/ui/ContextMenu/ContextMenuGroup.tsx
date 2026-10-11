"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { ComponentProps, FC } from "react";

export type ContextMenuGroupProps = ComponentProps<typeof ContextMenuPrimitive.Group>;

export const ContextMenuGroup: FC<ContextMenuGroupProps> = ({ ...props }) => {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;
};

ContextMenuGroup.displayName = "ContextMenuGroup";
