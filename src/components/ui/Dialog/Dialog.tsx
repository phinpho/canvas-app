"use client";

import { Dialog as DialogPrimitive, type DialogRootActions } from "@base-ui/react/dialog";
import type { ComponentProps, FC } from "react";

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root>;

export type DialogActions = DialogRootActions;

export const Dialog: FC<DialogProps> = ({ ...props }) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

Dialog.displayName = "Dialog";
