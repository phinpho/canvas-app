"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";
import { XIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { Button } from "../Button/Button.js";
import { DialogOverlay } from "./DialogOverlay.js";
import { DialogPortal } from "./DialogPortal.js";

export type DialogContentProps = ComponentProps<typeof DialogPrimitive.Popup> & {
  showCloseButton?: boolean;
  closeLabel?: string;
};

export const DialogContent: FC<DialogContentProps> = ({
  className,
  children,
  showCloseButton = true,
  closeLabel = "Close",
  ...props
}) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        {...props}
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
      >
        {children}
        {showCloseButton === true && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={<Button className="absolute top-2 right-2" size="icon-sm" variant="ghost" />}
          >
            <XIcon />
            <span className="sr-only">{closeLabel}</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
};

DialogContent.displayName = "DialogContent";
