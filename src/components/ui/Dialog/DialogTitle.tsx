"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;

export const DialogTitle: FC<DialogTitleProps> = ({ className, ...props }) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      {...props}
      className={cn("cn-font-heading text-base leading-none font-medium", className)}
    />
  );
};

DialogTitle.displayName = "DialogTitle";
