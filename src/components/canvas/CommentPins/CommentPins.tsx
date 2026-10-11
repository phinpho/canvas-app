"use client";

import type { FC } from "react";
import { useDocumentComments } from "../../../hooks/useDocumentComments.js";
import { CommentPin } from "../CommentPin/CommentPin.js";

export type CommentPinsProps = {
  documentId: string;
};

export const CommentPins: FC<CommentPinsProps> = ({ documentId }) => {
  const { documentComments } = useDocumentComments(documentId);

  return (
    <>
      {documentComments.map((documentComment, index) => (
        <CommentPin
          documentComment={documentComment}
          key={`comment-pin-${documentComment.id}-${index}`}
          x={documentComment.positionX}
          y={documentComment.positionY}
        />
      ))}
    </>
  );
};

CommentPins.displayName = "CommentPins";
