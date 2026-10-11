import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import type { DocumentCommentThread } from "../resources/database/DocumentCommentThread.js";
import { db } from "../resources/database/database.js";

export const useDocumentCommentThread = (documentCommentThreadId?: string) => {
  const documentCommentThread = useLiveQuery(() => {
    return db.transaction("r", [db.commentThreads], async (tx) => {
      if (!documentCommentThreadId) return undefined;
      return await tx.commentThreads.get(documentCommentThreadId);
    });
  }, [documentCommentThreadId]);

  return useMemo(
    (): Partial<DocumentCommentThread> =>
      documentCommentThread ?? {
        commentId: undefined,
        content: undefined,
        createdAt: undefined,
        id: documentCommentThreadId ?? undefined,
        user: undefined,
      },
    [documentCommentThread, documentCommentThreadId],
  );
};
