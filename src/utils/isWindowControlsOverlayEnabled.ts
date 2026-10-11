export const isWindowControlsOverlayEnabled = (): boolean => {
  if (!("navigator" in globalThis)) return false;
  if (typeof globalThis.navigator !== "object") return false;
  if (!("windowControlsOverlay" in globalThis.navigator)) return false;
  if (typeof globalThis.navigator.windowControlsOverlay !== "object") return false;

  return true;
};
