"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { ComponentProps, FC } from "react";

export type ContextMenuRadioGroupProps = ComponentProps<typeof ContextMenuPrimitive.RadioGroup>;

export const ContextMenuRadioGroup: FC<ContextMenuRadioGroupProps> = ({ ...props }) => {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />;
};

ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";
