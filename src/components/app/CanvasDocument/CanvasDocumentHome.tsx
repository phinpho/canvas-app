"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { useCanvasDocuments } from "../../../hooks/useCanvasDocuments.js";
import { PageCard } from "../Layout/PageCard.js";
import { PageCardTitle } from "../Layout/PageCardTitle.js";
import { PageLayout } from "../Layout/PageLayout.js";
import { CanvasDocumentEmpty } from "./CanvasDocumentEmpty.js";
import { CanvasDocumentList } from "./CanvasDocumentList.js";

export type CanvasDocumentHomeProps = Omit<ComponentProps<typeof PageLayout>, "children">;

export const CanvasDocumentHome: FC<CanvasDocumentHomeProps> = ({ className, ...props }) => {
  const { canvasDocumentItems, status } = useCanvasDocuments();

  return (
    <PageLayout
      {...props}
      className={cn(status === "idle" && "[&>main]:justify-center", className)}
      title="Documents"
    >
      {status === "success" && canvasDocumentItems.length ? (
        <CanvasDocumentList canvasDocuments={canvasDocumentItems} />
      ) : status === "idle" ? (
        <PageCard>
          <PageCardTitle className="animate-pulse text-center">Loading documents...</PageCardTitle>
          <p className="text-center">Currently loading the documents available for listing here.</p>
        </PageCard>
      ) : (
        <CanvasDocumentEmpty />
      )}
    </PageLayout>
  );
};

CanvasDocumentHome.displayName = "CanvasDocumentHome";
