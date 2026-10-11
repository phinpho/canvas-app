"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { ComponentProps, FC } from "react";

export type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;

export const DialogTrigger: FC<DialogTriggerProps> = ({ ...props }) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};

DialogTrigger.displayName = "DialogTrigger";
