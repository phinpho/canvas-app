"use client";

import type { ComponentProps, FC } from "react";
import { useCanvasDocuments } from "../../../hooks/useCanvasDocuments.js";
import { PageLayout } from "../Layout/PageLayout.js";
import { CanvasDocumentEmpty } from "./CanvasDocumentEmpty.js";
import { CanvasDocumentList } from "./CanvasDocumentList.js";

export type CanvasDocumentHomeProps = Omit<ComponentProps<typeof PageLayout>, "children">;

export const CanvasDocumentHome: FC<CanvasDocumentHomeProps> = ({ className, ...props }) => {
  const { canvasDocumentItems, status } = useCanvasDocuments();

  return (
    <PageLayout {...props} title={status === "idle" ? "Loading documents" : "Documents"}>
      {status === "success" && canvasDocumentItems.length ? (
        <CanvasDocumentList canvasDocuments={canvasDocumentItems} />
      ) : status === "idle" ? (
        <div className="flex flex-col items-center justify-start w-full h-full">
          <span className="text-3xl animate-pulse">Loading documents...</span>
        </div>
      ) : (
        <CanvasDocumentEmpty />
      )}
    </PageLayout>
  );
};

CanvasDocumentHome.displayName = "CanvasDocumentHome";
