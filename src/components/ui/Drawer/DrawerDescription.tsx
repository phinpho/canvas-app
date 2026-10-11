"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DrawerDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>;

export const DrawerDescription: FC<DrawerDescriptionProps> = ({ className, ...props }) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      {...props}
      className={cn("text-sm text-balance text-muted-foreground", className)}
    />
  );
};

DrawerDescription.displayName = "DrawerDescription";
