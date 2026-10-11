declare global {
  const __APP_DESCRIPTION__: string | undefined;
  const __APP_ID__: string | undefined;
  const __APP_NAME__: string | undefined;
  const __APP_SHORT_NAME__: string | undefined;
  const __APP_VERSION__: string | undefined;

  export type WindowControlsOverlayEventType = "geometrychange";

  export type WindowControlsOverlayGeometryChangeEvent = Event & {
    readonly type: "geometrychange";
    readonly target: WindowControlsOverlay;
    readonly visible: boolean;
  };

  export type WindowControlsOverlay = {
    readonly visible: boolean;
    addEventListener<T extends WindowControlsOverlayEventType = WindowControlsOverlayEventType>(
      eventType: T,
      listener: (this: WindowControlsOverlay, ev: WindowControlsOverlayGeometryChangeEvent) => void,
    ): void;
    removeEventListener<T extends WindowControlsOverlayEventType = WindowControlsOverlayEventType>(
      eventType: T,
      listener: (this: WindowControlsOverlay, ev: WindowControlsOverlayGeometryChangeEvent) => void,
    ): void;
  };

  interface Navigator {
    readonly windowControlsOverlay?: WindowControlsOverlay;
  }
}

export {};
