import { uuid } from "../../utils/uuid.js";
import type { DocumentCommentFields } from "../database/DocumentComment.js";
import { db } from "../database/database.js";

export type NewDocumentCommentResult = {
  documentId: string;
  commentId: string;
  commentThreadId?: string;
};

export const newDocumentComment = async ({
  documentId,
  user,
  status = "open",
  content,
  positionX,
  positionY,
  ...data
}: Omit<DocumentCommentFields, "id" | "createdAt" | "updatedAt" | "status"> & {
  status?: "open" | "resolved";
  content?: string;
}): Promise<NewDocumentCommentResult> => {
  const id = uuid();
  const now = new Date();

  return await db.transaction("rw", [db.documents, db.comments, db.commentThreads], async (tx) => {
    if (!user) {
      throw new Error("User is required to create a new document comment.");
    }

    if (!documentId) {
      throw new Error("Document ID is required to create a new document comment.");
    }

    const existingDocument = await tx.documents.get(documentId);

    if (!existingDocument) {
      throw new Error(`Canvas document with id ${documentId} does not exist.`);
    }

    const result = await tx.comments.add(
      {
        ...data,
        createdAt: now,
        documentId,
        id,
        positionX,
        positionY,
        status,
        updatedAt: now,
        user,
      },
      id,
    );

    if (!result) {
      throw new Error(
        `Failed to create a new document comment for document with id ${documentId}.`,
      );
    }

    const documentUpdateResult = await tx.documents.update(documentId, {
      updatedAt: now,
    });

    if (!documentUpdateResult) {
      throw new Error(`Failed to update the updatedAt field for document with id ${documentId}.`);
    }

    if (content) {
      const commentThreadId = uuid();
      const result = await tx.commentThreads.add(
        {
          commentId: id,
          content,
          createdAt: now,
          id: commentThreadId,
          updatedAt: now,
          user,
        },
        commentThreadId,
      );

      if (!result) {
        throw new Error(
          `Failed to create a new document comment thread for comment with id ${id}.`,
        );
      }

      return {
        commentId: id,
        commentThreadId,
        documentId,
      };
    }

    return {
      commentId: id,
      documentId,
    };
  });
};
