"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ContextMenuLabelProps = ComponentProps<typeof ContextMenuPrimitive.GroupLabel> & {
  inset?: boolean;
};

export const ContextMenuLabel: FC<ContextMenuLabelProps> = ({ className, inset, ...props }) => {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      {...props}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className,
      )}
      data-inset={inset}
    />
  );
};

ContextMenuLabel.displayName = "ContextMenuLabel";
