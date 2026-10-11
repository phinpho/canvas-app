import { cn } from "cn";
import { PlusIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import type { CanvasDocumentFields } from "../../../resources/database/CanvasDocument.js";
import { ScrollArea } from "../../ui/ScrollArea/ScrollArea.js";
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
    <div className={cn("w-3xl h-auto mx-auto overflow-auto", className)}>
      <ScrollArea className="w-full h-full">
        <div {...props} className={cn("grid grid-cols-4 gap-2 pt-4 pb-px px-px", className)}>
          {canvasDocuments.map((canvasDocument) => (
            <CanvasDocumentListItem
              canvasDocument={canvasDocument}
              key={`canvas-document-${canvasDocument.id}`}
            />
          ))}
        </div>
      </ScrollArea>
      <CanvasDocumentCreateDialog
        className="fixed bottom-4 right-4 rounded-full"
        size="icon-lg"
        variant="default"
      >
        <PlusIcon />
        <span className="sr-only">Create new Canvas</span>
      </CanvasDocumentCreateDialog>
    </div>
  );
};

CanvasDocumentList.displayName = "CanvasDocumentList";
