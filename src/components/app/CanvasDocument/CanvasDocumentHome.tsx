"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { useCanvasDocuments } from "../../../hooks/useCanvasDocuments.js";
import { NavBar } from "../NavBar/NavBar.js";
import { CanvasDocumentEmpty } from "./CanvasDocumentEmpty.js";
import { CanvasDocumentList } from "./CanvasDocumentList.js";

export type CanvasDocumentHomeProps = Omit<ComponentProps<"main">, "children">;

export const CanvasDocumentHome: FC<CanvasDocumentHomeProps> = ({ className, ...props }) => {
  const { canvasDocumentItems } = useCanvasDocuments();

  return (
    <main {...props} className={cn("relative w-full h-full overflow-auto", className)}>
      <NavBar />
      {canvasDocumentItems?.length ? (
        <CanvasDocumentList canvasDocuments={canvasDocumentItems} />
      ) : (
        <CanvasDocumentEmpty />
      )}
    </main>
  );
};

CanvasDocumentHome.displayName = "CanvasDocumentHome";
