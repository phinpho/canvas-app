import { type Context, createContext } from "react";

export type ProgressiveWebAppContextProps = {
  windowControlsOverlayEnabled?: boolean;
  windowControlsOverlayVisible?: boolean;
  setThemeColor: (color: string | { light?: string; dark?: string; default?: string }) => void;
};

export const ProgressiveWebAppContext: Context<ProgressiveWebAppContextProps | undefined> =
  createContext<ProgressiveWebAppContextProps | undefined>(undefined);
