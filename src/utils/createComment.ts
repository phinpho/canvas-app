import { newDocumentComment } from "../resources/mutations/newDocumentComment.js";
import { newDocumentCommentThread } from "../resources/mutations/newDocumentCommentThread.js";

export type CreateCommentProps = {
  documentId?: string;
  commentId?: string;
  user: string;
  content: string;
  positionX?: number;
  positionY?: number;
  resolve?: boolean;
};

export type CreateCommentResult = {
  documentId: string;
  commentId: string;
  commentThreadId: string;
};

export const createComment = async ({
  documentId,
  commentId,
  user,
  content,
  positionX,
  positionY,
  resolve,
}: CreateCommentProps): Promise<CreateCommentResult> => {
  if (typeof content !== "string" || content.trim() === "") {
    throw new Error("Content is required to create a new comment.");
  }

  if (!commentId) {
    if (!documentId) throw new Error("Document ID is required to create a new comment.");
    if (typeof positionX !== "number" || typeof positionY !== "number")
      throw new Error("Position X and Y are required to create a new comment.");

    const result = await newDocumentComment({
      content,
      documentId,
      positionX,
      positionY,
      user,
    });

    if (!result.commentThreadId) {
      throw new Error("Failed to create a new document comment thread.");
    }

    return result as CreateCommentResult;
  }

  return await newDocumentCommentThread({
    commentId,
    content,
    status: typeof resolve === "boolean" ? (resolve ? "resolved" : "open") : undefined,
    user,
  });
};
