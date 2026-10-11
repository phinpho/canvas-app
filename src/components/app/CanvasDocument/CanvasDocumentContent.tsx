"use client";

import type { ComponentProps, FC } from "react";
import { useDocumentContextMenu } from "../../../hooks/useDocumentContextMenu.js";
import { useDocumentObjectIds } from "../../../hooks/useDocumentObjectIds.js";
import type {
  CanvasDocument,
  CanvasDocumentFields,
} from "../../../resources/database/CanvasDocument.js";
import { Canvas } from "../../canvas/Canvas/Canvas.js";
import { CanvasDocumentObject } from "../../canvas/CanvasDocumentObject/CanvasDocumentObject.js";
import { CommentPins } from "../../canvas/CommentPins/CommentPins.js";
export type CanvasDocumentContentProps = Omit<ComponentProps<typeof Canvas>, "children"> & {
  canvasDocument: CanvasDocument | CanvasDocumentFields;
};

export const CanvasDocumentContent: FC<CanvasDocumentContentProps> = ({
  canvasDocument,
  ...props
}) => {
  const { onCanvasContextMenuHandler } = useDocumentContextMenu();
  const documentObjectIds = useDocumentObjectIds(canvasDocument.id);

  return (
    <Canvas {...props} onContextMenu={onCanvasContextMenuHandler}>
      <CommentPins documentId={canvasDocument.id} />
      {documentObjectIds.map((documentObjectId) => (
        <CanvasDocumentObject
          documentId={canvasDocument.id}
          id={documentObjectId}
          key={documentObjectId}
        />
      ))}
    </Canvas>
  );
};

CanvasDocumentContent.displayName = "CanvasDocumentContent";
