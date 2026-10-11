"use client";

import { type FC, type PropsWithChildren, useCallback, useSyncExternalStore } from "react";
import { ProgressiveWebAppContext } from "../contexts/ProgressiveWebAppContext.js";
import { isWindowControlsOverlayEnabledExternalStore } from "../externalStores/isWindowControlsOverlayEnabled.js";
import { isWindowControlsOverlayEnabled } from "../utils/isWindowControlsOverlayEnabled.js";
import { setDocumentThemeColor } from "../utils/setDocumentThemeColor.js";

export type ProgressiveWebAppProviderProps = PropsWithChildren;

export const ProgressiveWebAppProvider: FC<ProgressiveWebAppProviderProps> = ({ children }) => {
  const visible = useSyncExternalStore<boolean | undefined>(
    isWindowControlsOverlayEnabledExternalStore.subscribe,
    isWindowControlsOverlayEnabledExternalStore.getSnapshot,
    isWindowControlsOverlayEnabledExternalStore.getServerSnapshot,
  );

  const setThemeColor = useCallback(
    (color: string | { light?: string; dark?: string; default?: string }) => {
      setDocumentThemeColor(color);
    },
    [],
  );

  return (
    <ProgressiveWebAppContext
      value={{
        setThemeColor,
        windowControlsOverlayEnabled: isWindowControlsOverlayEnabled(),
        windowControlsOverlayVisible: visible,
      }}
    >
      {children}
    </ProgressiveWebAppContext>
  );
};
