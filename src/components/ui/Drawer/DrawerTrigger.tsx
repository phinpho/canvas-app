"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps, FC } from "react";

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export const DrawerTrigger: FC<DrawerTriggerProps> = ({ ...props }) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

DrawerTrigger.displayName = "DrawerTrigger";
