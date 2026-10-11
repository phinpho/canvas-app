"use client";

import { type FC, type PropsWithChildren, useCallback, useLayoutEffect, useRef } from "react";
import { CommentContext, type CommentThreadItem } from "../contexts/CommentContext.js";
import { useComments } from "../hooks/useComments.js";
import { useDocumentCommentThreads } from "../hooks/useDocumentCommentThreads.js";
import type {
  DocumentComment,
  DocumentCommentFields,
} from "../resources/database/DocumentComment.js";

export type CommentProviderProps = PropsWithChildren<{
  documentComment: DocumentComment | DocumentCommentFields;
  commentId?: string;
  documentId?: string;
  defaultThread?: CommentThreadItem[];
}>;

export const CommentProvider: FC<CommentProviderProps> = ({ documentComment, children }) => {
  const commentRef = useRef<HTMLDivElement>(null);
  const { documentCommentThreads } = useDocumentCommentThreads(documentComment.id);

  const { showCommentPopover, hideCommentPopover, setCommentRefs } = useComments();

  const showPopover = useCallback(() => {
    showCommentPopover(documentComment.id);
  }, [documentComment, showCommentPopover]);

  const hidePopover = useCallback(() => {
    hideCommentPopover(documentComment.id);
  }, [documentComment, hideCommentPopover]);

  useLayoutEffect(() => {
    if (documentComment.id && commentRef.current) {
      setCommentRefs((prevRefs) => ({
        ...prevRefs,
        [documentComment.id]: commentRef,
      }));
    }
    return () => {
      setCommentRefs((prevRefs) => {
        if (documentComment.id) {
          const newRefs = { ...prevRefs };
          delete newRefs[documentComment.id];
          return newRefs;
        }
        return prevRefs;
      });
    };
  }, [setCommentRefs, documentComment]);

  return (
    <CommentContext
      value={{
        commentRef,
        documentComment,
        documentCommentThreads,
        hidePopover,
        id: documentComment.id,
        showPopover,
      }}
    >
      {children}
    </CommentContext>
  );
};
