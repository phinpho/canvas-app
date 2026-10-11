"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { ScrollBar } from "./ScrollBar.js";

export type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root>;

export const ScrollArea: FC<ScrollAreaProps> = ({ className, children, ...props }) => {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      {...props}
      className={cn("relative", className)}
    >
      <ScrollAreaPrimitive.Viewport
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
        data-slot="scroll-area-viewport"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

ScrollArea.displayName = "ScrollArea";
