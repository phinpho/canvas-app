import type { ComponentProps, FC } from "react";
import { useDocumentCommentThreads } from "../../../hooks/useDocumentCommentThreads.js";
import { CommentThreadItem } from "./CommentThreadItem.js";

export type CommentThreadProps = Omit<ComponentProps<typeof CommentThreadItem>, "variant"> & {
  commentId: string;
  hoverCard?: boolean;
};

export const CommentThread: FC<CommentThreadProps> = ({
  hoverCard = false,
  commentId,
  ...props
}) => {
  const { documentCommentThreads } = useDocumentCommentThreads(commentId);

  return (
    <>
      {documentCommentThreads.map((commentThread, index) => (
        <CommentThreadItem
          content={commentThread.content}
          createdAt={commentThread.createdAt}
          hoverCard={hoverCard}
          id={commentThread.id}
          key={`${commentId}-comment-${commentThread.id}`}
          user={commentThread.user}
          variant={index === 0 ? "muted" : "default"}
          {...props}
        />
      ))}
    </>
  );
};

CommentThread.displayName = "CommentThread";
