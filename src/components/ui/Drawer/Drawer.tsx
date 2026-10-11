"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps, FC } from "react";
import { DrawerProvider } from "../../../providers/DrawerProvider.js";

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root> & {
  showSwipeHandle?: boolean;
};

export const Drawer: FC<DrawerProps> = ({
  modal = true,
  showSwipeHandle = false,
  snapPoints,
  swipeDirection = "down",
  ...props
}) => {
  return (
    <DrawerProvider
      modal={modal}
      showSwipeHandle={showSwipeHandle}
      snapPoints={snapPoints}
      swipeDirection={swipeDirection}
    >
      <DrawerPrimitive.Root
        data-slot="drawer"
        {...props}
        modal={modal}
        snapPoints={snapPoints}
        swipeDirection={swipeDirection}
      />
    </DrawerProvider>
  );
};

Drawer.displayName = "Drawer";
