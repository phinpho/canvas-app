"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps, FC } from "react";

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;

export const DrawerClose: FC<DrawerCloseProps> = ({ ...props }) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
};

DrawerClose.displayName = "DrawerClose";
