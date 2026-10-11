"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ContextMenuTriggerProps = ComponentProps<typeof ContextMenuPrimitive.Trigger>;

export const ContextMenuTrigger: FC<ContextMenuTriggerProps> = ({ className, ...props }) => {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      {...props}
      className={cn("select-none", className)}
    />
  );
};

ContextMenuTrigger.displayName = "ContextMenuTrigger";
