"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Backdrop>;

export const DialogOverlay: FC<DialogOverlayProps> = ({ className, ...props }) => {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      {...props}
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
    />
  );
};

DialogOverlay.displayName = "DialogOverlay";
