import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Button } from "../Button/Button.js";

export type DialogFooterProps = ComponentProps<"div"> & {
  showCloseButton?: boolean;
  closeLabel?: string;
};

export const DialogFooter: FC<DialogFooterProps> = ({
  className,
  showCloseButton = false,
  children,
  closeLabel = "Close",
  ...props
}) => {
  return (
    <div
      data-slot="dialog-footer"
      {...props}
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className,
      )}
    >
      {children}
      {showCloseButton === true && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          {closeLabel}
        </DialogPrimitive.Close>
      )}
    </div>
  );
};

DialogFooter.displayName = "DialogFooter";
