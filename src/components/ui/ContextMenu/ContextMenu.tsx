"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { ComponentProps, FC } from "react";

export type ContextMenuProps = ComponentProps<typeof ContextMenuPrimitive.Root>;

export const ContextMenu: FC<ContextMenuProps> = ({ ...props }) => {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
};

ContextMenu.displayName = "ContextMenu";
