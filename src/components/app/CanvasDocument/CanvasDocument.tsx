"use client";

import { cn } from "cn";
import { type ComponentProps, type FC, useMemo } from "react";
import { useParams } from "react-router";
import { useCanvasDocument } from "../../../hooks/useCanvasDocument.js";
import { CanvasDocumentNotFound } from "./CanvasDocumentNotFound.js";
import { CanvasDocumentView } from "./CanvasDocumentView.js";

export type CanvasDocumentProps = Omit<ComponentProps<"main">, "children"> & {
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export const CanvasDocument: FC<CanvasDocumentProps> = ({
  className,
  name = "Untitled Document",
  description,
  createdAt,
  updatedAt,
  ...props
}) => {
  const params = useParams();

  const documentId = useMemo(() => {
    return params.documentId;
  }, [params]);

  const { canvasDocument, status } = useCanvasDocument(documentId);

  return (
    <main
      {...props}
      className={cn("relative w-full h-full overflow-hidden", className)}
      id={`canvas-document-${documentId}`}
    >
      {status === "found" && canvasDocument !== undefined ? (
        <CanvasDocumentView canvasDocument={canvasDocument} />
      ) : status === "idle" ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <span className="text-lg text-accent">Loading...</span>
        </div>
      ) : (
        <CanvasDocumentNotFound className="w-full h-full" />
      )}
    </main>
  );
};

CanvasDocument.displayName = "CanvasDocument";
