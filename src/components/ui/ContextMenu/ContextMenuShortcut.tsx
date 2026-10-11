"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ContextMenuShortcutProps = ComponentProps<"span">;

export const ContextMenuShortcut: FC<ContextMenuShortcutProps> = ({ className, ...props }) => {
  return (
    <span
      data-slot="context-menu-shortcut"
      {...props}
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground",
        className,
      )}
    />
  );
};

ContextMenuShortcut.displayName = "ContextMenuShortcut";
