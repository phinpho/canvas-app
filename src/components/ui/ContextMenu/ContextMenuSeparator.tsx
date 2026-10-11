"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ContextMenuSeparatorProps = ComponentProps<typeof ContextMenuPrimitive.Separator>;

export const ContextMenuSeparator: FC<ContextMenuSeparatorProps> = ({ className, ...props }) => {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      {...props}
      className={cn("-mx-1 my-1 h-px bg-border", className)}
    />
  );
};

ContextMenuSeparator.displayName = "ContextMenuSeparator";
