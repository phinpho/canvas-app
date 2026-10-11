import { type FC, type PropsWithChildren, type RefObject, useCallback, useState } from "react";
import { CommentBox } from "../components/app/CommentBox/CommentBox.js";
import { CommentsContext } from "../contexts/CommentsContext.js";
import { useDocumentComments } from "../hooks/useDocumentComments.js";
export type CommentsProviderProps = PropsWithChildren<{
  documentId?: string;
}>;

export const CommentsProvider: FC<CommentsProviderProps> = ({ children, documentId }) => {
  const { documentComments } = useDocumentComments(documentId);
  const [commentRefs, setCommentRefs] = useState<Record<string, RefObject<HTMLDivElement | null>>>(
    {},
  );
  const showCommentPopover = useCallback(
    (id: string) => {
      if (!(id in commentRefs && commentRefs[id])) return;

      for (const [commentRefId, commentRef] of Object.entries(commentRefs)) {
        if (commentRef.current) {
          if (commentRefId === id) {
            commentRef.current.showPopover();
          } else {
            commentRef.current.hidePopover();
          }
        }
      }
    },
    [commentRefs],
  );

  const hideCommentPopover = useCallback(
    (id: string) => {
      if (!(id in commentRefs && commentRefs[id])) return;
      const commentBox = commentRefs[id].current;
      if (!commentBox) return;

      commentBox.hidePopover();
    },
    [commentRefs],
  );

  return (
    <CommentsContext
      value={{
        commentRefs,
        documentComments,
        documentId,
        hideCommentPopover,
        setCommentRefs,
        showCommentPopover,
      }}
    >
      {children}
      {documentComments?.map((documentComment, index) => (
        <CommentBox
          documentComment={documentComment}
          key={`comment-${documentComment.id}-${index}`}
        />
      ))}
    </CommentsContext>
  );
};
