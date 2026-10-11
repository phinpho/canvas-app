import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../resources/database/database.js";

export const useDocumentCommentThreads = (commentId?: string) => {
  const documentCommentThreads = useLiveQuery(
    () =>
      db.transaction("r", [db.commentThreads], async (tx) => {
        if (!commentId) return [];
        return await tx.commentThreads.where({ commentId }).sortBy("createdAt");
      }),
    [commentId],
  );

  return {
    documentCommentThreads: documentCommentThreads ?? [],
  };
};
