"use client";

import type { ComponentProps, FC } from "react";
import { CommentsProvider } from "../../../providers/CommentsProvider.js";
import { DocumentContextMenuProvider } from "../../../providers/DocumentContextMenuProvider.js";
import type {
  CanvasDocument,
  CanvasDocumentFields,
} from "../../../resources/database/CanvasDocument.js";
import { CanvasDocumentContent } from "./CanvasDocumentContent.js";
import { CanvasDocumentTopbar } from "./CanvasDocumentTopbar.js";

export type CanvasDocumentViewProps = ComponentProps<"div"> & {
  canvasDocument: CanvasDocument | CanvasDocumentFields;
};

export const CanvasDocumentView: FC<CanvasDocumentViewProps> = ({ canvasDocument, ...props }) => {
  return (
    <div {...props} className="relative w-full h-full">
      <DocumentContextMenuProvider documentId={canvasDocument.id}>
        <CommentsProvider documentId={canvasDocument.id}>
          <CanvasDocumentContent canvasDocument={canvasDocument} />
          <CanvasDocumentTopbar
            canvasDocumentId={canvasDocument.id}
            canvasDocumentName={canvasDocument.name}
          />
        </CommentsProvider>
      </DocumentContextMenuProvider>
    </div>
  );
};

CanvasDocumentView.displayName = "CanvasDocumentView";
