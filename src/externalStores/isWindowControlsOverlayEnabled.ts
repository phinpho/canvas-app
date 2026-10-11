import type { ExternalStore } from "../types/externalStore.d.ts";
import { isWindowControlsOverlayEnabled } from "../utils/isWindowControlsOverlayEnabled.js";

export const isWindowControlsOverlayEnabledExternalStore: ExternalStore<boolean | undefined> = {
  getServerSnapshot: () => undefined,
  getSnapshot: () => {
    if (isWindowControlsOverlayEnabled()) {
      return globalThis.navigator.windowControlsOverlay?.visible;
    }
    return undefined;
  },
  subscribe: (callback: () => void) => {
    if (isWindowControlsOverlayEnabled()) {
      globalThis.navigator.windowControlsOverlay?.addEventListener("geometrychange", callback);
    }
    return () => {
      if (isWindowControlsOverlayEnabled()) {
        globalThis.navigator.windowControlsOverlay?.removeEventListener("geometrychange", callback);
      }
    };
  },
};
