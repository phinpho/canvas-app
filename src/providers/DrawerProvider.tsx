"use client";

import type { Drawer } from "@base-ui/react/drawer";
import { type FC, type PropsWithChildren, useMemo } from "react";
import { DrawerContext, type DrawerContextProps } from "../contexts/DrawerContext.js";

export type DrawerProviderProps = PropsWithChildren<{
  modal?: Drawer.Root.Props["modal"];
  snapPoints?: Drawer.Root.Props["snapPoints"];
  showSwipeHandle?: boolean;
  swipeDirection?: Drawer.Root.Props["swipeDirection"];
}>;

export const DrawerProvider: FC<DrawerProviderProps> = ({
  children,
  modal,
  snapPoints,
  showSwipeHandle = false,
  swipeDirection = "down",
}) => {
  const hasSnapPoints = useMemo(
    () => Array.isArray(snapPoints) && snapPoints.length > 0,
    [snapPoints],
  );

  const drawerContextValue = useMemo((): DrawerContextProps => {
    return {
      hasSnapPoints,
      modal,
      showSwipeHandle,
      swipeDirection,
    };
  }, [hasSnapPoints, modal, showSwipeHandle, swipeDirection]);

  return <DrawerContext value={drawerContextValue}>{children}</DrawerContext>;
};

DrawerProvider.displayName = "DrawerProvider";
