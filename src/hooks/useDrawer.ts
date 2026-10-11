import { use } from "react";

import { DrawerContext, type DrawerContextProps } from "../contexts/DrawerContext.js";

export type UseDrawerHook = () => DrawerContextProps;

export const useDrawer: UseDrawerHook = () => {
  const drawerContext = use(DrawerContext);

  if (!drawerContext) {
    throw new Error("useDrawer must be used within a <DrawerProvider>");
  }

  return drawerContext;
};
