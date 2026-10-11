"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps, FC } from "react";

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

export const DrawerPortal: FC<DrawerPortalProps> = ({ ...props }) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
};

DrawerPortal.displayName = "DrawerPortal";
