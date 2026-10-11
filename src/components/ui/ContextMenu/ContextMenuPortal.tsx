"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { ComponentProps, FC } from "react";

export type ContextMenuPortalProps = ComponentProps<typeof ContextMenuPrimitive.Portal>;

export const ContextMenuPortal: FC<ContextMenuPortalProps> = ({ ...props }) => {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />;
};

ContextMenuPortal.displayName = "ContextMenuPortal";
