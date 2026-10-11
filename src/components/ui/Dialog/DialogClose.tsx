"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { ComponentProps, FC } from "react";

export type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>;

export const DialogClose: FC<DialogCloseProps> = ({ ...props }) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};

DialogClose.displayName = "DialogClose";
