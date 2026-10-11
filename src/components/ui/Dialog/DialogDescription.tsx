"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;

export const DialogDescription: FC<DialogDescriptionProps> = ({ className, ...props }) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      {...props}
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className,
      )}
    />
  );
};

DialogDescription.displayName = "DialogDescription";
