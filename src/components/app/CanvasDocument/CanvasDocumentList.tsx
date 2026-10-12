import { cn } from "cn";
import { PlusIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import type { CanvasDocumentFields } from "../../../resources/database/CanvasDocument.js";
import { CanvasDocumentCreateDialog } from "./CanvasDocumentCreateDialog.js";
import { CanvasDocumentListItem } from "./CanvasDocumentListItem.js";

export type CanvasDocumentListProps = Omit<ComponentProps<"div">, "children"> & {
  canvasDocuments: CanvasDocumentFields[];
};

export const CanvasDocumentList: FC<CanvasDocumentListProps> = ({
  canvasDocuments,
  className,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "grid grid-cols-1 w-full md:w-3xl md:grid-cols-2 lg:grid-cols-3 gap-4",
          className,
        )}
      >
        {canvasDocuments.map((canvasDocument) => (
          <CanvasDocumentListItem
            canvasDocument={canvasDocument}
            key={`canvas-document-${canvasDocument.id}`}
          />
        ))}
      </div>
      <CanvasDocumentCreateDialog
        className="fixed bottom-4 right-4 rounded-full"
        size="icon-lg"
        variant="default"
      >
        <PlusIcon />
        <span className="sr-only">Create new Canvas</span>
      </CanvasDocumentCreateDialog>
    </>
  );
};

CanvasDocumentList.displayName = "CanvasDocumentList";
