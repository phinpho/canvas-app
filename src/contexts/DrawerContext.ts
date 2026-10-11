import type { Drawer } from "@base-ui/react/drawer";
import { type Context, createContext } from "react";

export type DrawerContextProps = {
  hasSnapPoints: boolean;
  modal: Drawer.Root.Props["modal"];
  showSwipeHandle: boolean;
  swipeDirection: NonNullable<Drawer.Root.Props["swipeDirection"]>;
};

export const DrawerContext: Context<DrawerContextProps | undefined> = createContext<
  DrawerContextProps | undefined
>(undefined);
