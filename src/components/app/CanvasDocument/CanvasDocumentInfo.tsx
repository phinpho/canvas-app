"use client";

import type { ComponentProps, FC } from "react";
import { useDocumentComments } from "../../../hooks/useDocumentComments.js";
import { useDocumentObjectIds } from "../../../hooks/useDocumentObjectIds.js";
import type {
  CanvasDocument,
  CanvasDocumentFields,
} from "../../../resources/database/CanvasDocument.js";
import { ScrollArea } from "../../ui/ScrollArea/ScrollArea.js";
import { UserAvatar } from "../../utils/UserAvatar.js";
import { Username } from "../../utils/Username.js";

export type CanvasDocumentInfoProps = ComponentProps<"div"> & {
  canvasDocument: CanvasDocument | CanvasDocumentFields;
};

export const CanvasDocumentInfo: FC<CanvasDocumentInfoProps> = ({ canvasDocument }) => {
  const documentObjectIds = useDocumentObjectIds(canvasDocument.id);
  const { documentCommentsOpenCount, documentCommentsResolvedCount } = useDocumentComments(
    canvasDocument.id,
  );
  return (
    <div className="w-full h-full overflow-auto">
      <ScrollArea className="w-full h-full p-4">
        <h2 className="text-lg pb-2 border-b mb-2">General details</h2>
        <dl className="grid grid-cols-2 gap-2">
          <dt>Created at</dt>
          <dd>{new Date(canvasDocument.createdAt).toLocaleString()}</dd>
          <dt>Updated at</dt>
          <dd>{new Date(canvasDocument.updatedAt).toLocaleString()}</dd>
          <dt>Owner</dt>
          <dd className="flex flex-row items-center gap-2">
            <UserAvatar size="sm" username={canvasDocument.user} />
            <Username username={canvasDocument.user} />
          </dd>
          <dt>Objects</dt>
          <dd>{documentObjectIds.length ?? "0"}</dd>
        </dl>
        <h2 className="mt-3 text-lg pb-2 border-b mb-2">Comments</h2>
        <dl className="grid grid-cols-2 gap-2">
          <dt>Open</dt>
          <dd>{documentCommentsOpenCount}</dd>
          <dt>Resolved</dt>
          <dd>{documentCommentsResolvedCount}</dd>
        </dl>
      </ScrollArea>
    </div>
  );
};

CanvasDocumentInfo.displayName = "CanvasDocumentInfo";
