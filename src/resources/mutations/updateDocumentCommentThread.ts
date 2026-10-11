import type { DocumentCommentThreadFields } from "../database/DocumentCommentThread.js";
import { db } from "../database/database.js";

export const updateDocumentCommentThread = async ({
  id,
  user,
  ...data
}: Partial<
  Omit<DocumentCommentThreadFields, "id" | "updatedAt" | "createdAt" | "commentId" | "user">
> & {
  id: string;
  user: string;
  commentId: string;
}) => {
  const now = new Date();

  return await db.transaction("rw", [db.comments, db.commentThreads], async (tx) => {
    if (!user) {
      throw new Error("User is required to update a document comment thread.");
    }

    const existingThread = await tx.commentThreads.get(id);

    if (!existingThread) {
      throw new Error(`Document comment thread with id ${id} does not exist.`);
    }

    if (existingThread.user !== user) {
      throw new Error("User is not authorized to update this document comment thread.");
    }

    const updatedThread = {
      ...existingThread,
      ...data,
      updatedAt: now,
    };

    const result = await tx.commentThreads.update(id, updatedThread);

    if (result === 0) {
      throw new Error(`Failed to update document comment thread with id ${id}.`);
    }

    return updatedThread;
  });
};
