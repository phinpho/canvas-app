"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { ComponentProps, FC } from "react";

export type ContextMenuSubProps = ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>;

export const ContextMenuSub: FC<ContextMenuSubProps> = ({ ...props }) => {
  return <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />;
};

ContextMenuSub.displayName = "ContextMenuSub";
