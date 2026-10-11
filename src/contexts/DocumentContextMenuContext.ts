import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage } from "konva/lib/Stage";
import { type Context, createContext, type RefObject } from "react";

export type DocumentContextMenuContextProps = {
  onCanvasContextMenuHandler?: (event: KonvaEventObject<PointerEvent, Stage>) => void;
  documentId?: string | undefined;
  visible: boolean;
  position: { x: number; y: number };
  clientPosition: { x: number; y: number };
  contextMenuRef: RefObject<HTMLDivElement | null>;
  show: () => void;
  hide: () => void;
};

export const DocumentContextMenuContext: Context<DocumentContextMenuContextProps | undefined> =
  createContext<DocumentContextMenuContextProps | undefined>(undefined);
