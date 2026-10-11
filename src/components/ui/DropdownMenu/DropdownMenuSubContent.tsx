"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { DropdownMenuContent } from "./DropdownMenuContent.js";

export type DropdownMenuSubContentProps = ComponentProps<typeof DropdownMenuContent>;

export const DropdownMenuSubContent: FC<DropdownMenuSubContentProps> = ({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}) => {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      {...props}
      align={align}
      alignOffset={alignOffset}
      className={cn(
        "w-auto min-w-24 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className,
      )}
      side={side}
      sideOffset={sideOffset}
    />
  );
};

DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
