"use client";

import { cn } from "cn";
import { type ComponentProps, type FC, useMemo } from "react";
import { useParams } from "react-router";
import { useCanvasDocument } from "../../../hooks/useCanvasDocument.js";
import { PageLayout } from "../Layout/PageLayout.js";
import { CanvasDocumentNotFound } from "./CanvasDocumentNotFound.js";
import { CanvasDocumentView } from "./CanvasDocumentView.js";

export type CanvasDocumentProps = Omit<ComponentProps<typeof PageLayout>, "children"> & {
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

  const documentReady = useMemo(
    () => status === "found" && canvasDocument !== undefined,
    [status, canvasDocument],
  );

  const pageTitle = useMemo(() => {
    return status === "found" && canvasDocument !== undefined
      ? canvasDocument.name
      : status === "idle"
        ? "Loading document..."
        : "Document not found";
  }, [status, canvasDocument]);

  return (
    <PageLayout
      {...props}
      className={cn("[&>main]:overflow-hidden", documentReady && "[&>main]:p-0", className)}
      hideNavBar={documentReady}
      id={`canvas-document-${documentId}`}
      title={pageTitle}
    >
      {status === "found" && canvasDocument !== undefined ? (
        <CanvasDocumentView canvasDocument={canvasDocument} />
      ) : status === "idle" ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <span className="text-3xl animate-pulse">Loading...</span>
        </div>
      ) : (
        <CanvasDocumentNotFound />
      )}
    </PageLayout>
  );
};

CanvasDocument.displayName = "CanvasDocument";
