"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

export const DrawerTitle: FC<DrawerTitleProps> = ({ className, ...props }) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      {...props}
      className={cn("cn-font-heading text-base font-medium text-foreground", className)}
    />
  );
};

DrawerTitle.displayName = "DrawerTitle";
