"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { ComponentProps, FC } from "react";

export type DialogPortalProps = ComponentProps<typeof DialogPrimitive.Portal>;

export const DialogPortal: FC<DialogPortalProps> = ({ ...props }) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

DialogPortal.displayName = "DialogPortal";
