"use client";

import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage } from "konva/lib/Stage";
import {
  type FC,
  type PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { DocumentContextMenu } from "../components/app/DocumentContextMenu/DocumentContextMenu.js";
import { DocumentContextMenuContext } from "../contexts/DocumentContextMenuContext.js";

export type DocumentContextMenuProviderProps = PropsWithChildren<{
  documentId?: string;
}>;

export const DocumentContextMenuProvider: FC<DocumentContextMenuProviderProps> = ({
  children,
  documentId,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [clientPosition, setClientPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const hide = useCallback(() => {
    if (!documentId) return;
    setVisible(false);

    if (contextMenuRef.current) {
      contextMenuRef.current.hidePopover();
    }
  }, [documentId]);

  const show = useCallback(() => {
    if (!documentId) return;

    if (contextMenuRef.current) {
      setVisible(true);
      contextMenuRef.current.showPopover();
    }
  }, [documentId]);

  const onCanvasContextMenuHandler = useCallback(
    (e: KonvaEventObject<PointerEvent, Stage>) => {
      if (e.target.parent !== null) {
        hide();
        return;
      }
      e.evt.stopPropagation();
      e.evt.preventDefault();

      if (contextMenuRef.current) {
        setPosition({
          x: e.currentTarget.getPointerPosition()?.x ?? 0,
          y: e.currentTarget.getPointerPosition()?.y ?? 0,
        });

        setClientPosition({
          x: e.evt.clientX,
          y: e.evt.clientY,
        });

        show();

        globalThis.addEventListener(
          "click",
          (event) => {
            if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
              hide();
            }
          },
          { once: true },
        );
      }
    },
    [hide, show],
  );

  useLayoutEffect(() => {
    if (documentId) {
      globalThis.addEventListener("lostpointercapture", hide);
      globalThis.addEventListener("focusout", hide);

      return () => {
        globalThis.removeEventListener("lostpointercapture", hide);
        globalThis.removeEventListener("focusout", hide);
      };
    }
    return () => {};
  }, [documentId, hide]);

  return (
    <DocumentContextMenuContext
      value={{
        clientPosition,
        contextMenuRef,
        documentId,
        hide,
        onCanvasContextMenuHandler,
        position,
        show,
        visible,
      }}
    >
      {children}
      <DocumentContextMenu />
    </DocumentContextMenuContext>
  );
};

DocumentContextMenuProvider.displayName = "DocumentContextMenuProvider";
