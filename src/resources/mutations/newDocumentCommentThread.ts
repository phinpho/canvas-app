import { uuid } from "../../utils/uuid.js";
import type { DocumentCommentThreadFields } from "../database/DocumentCommentThread.js";
import { db } from "../database/database.js";

export type NewDocumentCommentThreadResult = {
  documentId: string;
  commentId: string;
  commentThreadId: string;
};

export const newDocumentCommentThread = async ({
  commentId,
  user,
  status,
  ...data
}: Omit<DocumentCommentThreadFields, "id" | "createdAt" | "updatedAt"> & {
  status?: "open" | "resolved";
}): Promise<NewDocumentCommentThreadResult> => {
  const id = uuid();
  const now = new Date();

  return await db.transaction("rw", [db.documents, db.comments, db.commentThreads], async (tx) => {
    if (!user) {
      throw new Error("User is required to create a new document comment thread.");
    }

    if (!commentId) {
      throw new Error("Comment ID is required to create a new document comment thread.");
    }

    const existingComment = await tx.comments.get(commentId);

    if (!existingComment) {
      throw new Error(`Document comment with id ${commentId} does not exist.`);
    }

    const result = await tx.commentThreads.add(
      {
        ...data,
        commentId,
        createdAt: now,
        id,
        updatedAt: now,
        user,
      },
      id,
    );

    if (!result) {
      throw new Error(
        `Failed to create a new document comment thread for comment with id ${commentId}.`,
      );
    }

    const statusValue =
      status === "open" || status === "resolved" ? status : existingComment.status;
    const commentUpdateResult = await tx.comments.update(commentId, {
      status: statusValue,
      updatedAt: now,
    });

    if (!commentUpdateResult) {
      throw new Error(`Failed to update the updatedAt field for comment with id ${commentId}.`);
    }

    const documentUpdateResult = await tx.documents.update(existingComment.documentId, {
      updatedAt: now,
    });

    if (!documentUpdateResult) {
      throw new Error(
        `Failed to update the updatedAt field for document with id ${existingComment.documentId}.`,
      );
    }

    return {
      commentId,
      commentThreadId: result,
      documentId: existingComment.documentId,
    };
  });
};
