"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { ContextMenuContent } from "./ContextMenuContent.js";

export type ContextMenuSubContentProps = ComponentProps<typeof ContextMenuContent>;

export const ContextMenuSubContent: FC<ContextMenuSubContentProps> = ({
  className,
  side = "right",
  ...props
}) => {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      {...props}
      className={cn("shadow-lg", className)}
      side={side}
    />
  );
};

ContextMenuSubContent.displayName = "ContextMenuSubContent";
