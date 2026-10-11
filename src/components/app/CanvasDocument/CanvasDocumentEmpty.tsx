import { BoxesIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { Empty } from "../../ui/Empty/Empty.js";
import { EmptyContent } from "../../ui/Empty/EmptyContent.js";
import { EmptyDescription } from "../../ui/Empty/EmptyDescription.js";
import { EmptyHeader } from "../../ui/Empty/EmptyHeader.js";
import { EmptyMedia } from "../../ui/Empty/EmptyMedia.js";
import { EmptyTitle } from "../../ui/Empty/EmptyTitle.js";
import { CanvasDocumentCreateDialog } from "./CanvasDocumentCreateDialog.js";
import { CanvasDocumentImportDialog } from "./CanvasDocumentImportDialog.js";

export type CanvasDocumentEmptyProps = ComponentProps<typeof Empty>;

export const CanvasDocumentEmpty: FC<CanvasDocumentEmptyProps> = ({ ...props }) => {
  return (
    <Empty {...props}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BoxesIcon />
        </EmptyMedia>
        <EmptyTitle>No Canvas Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any canvases yet. Get started by creating your first canvas and
          exploring the features.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <CanvasDocumentCreateDialog>Create new Canvas</CanvasDocumentCreateDialog>
        <CanvasDocumentImportDialog>Import existing Canvas</CanvasDocumentImportDialog>
      </EmptyContent>
    </Empty>
  );
};
