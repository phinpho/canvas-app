import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import { db } from "../resources/database/database.js";

export const useDocumentComments = (documentId?: string) => {
  const documentComments = useLiveQuery(
    () =>
      db.transaction("r", [db.comments], async (tx) => {
        if (!documentId) return [];
        return (await tx.comments.where({ documentId }).sortBy("updatedAt")).reverse();
      }),
    [documentId],
  );

  const documentCommentsCount = useMemo(() => {
    return documentComments?.length || 0;
  }, [documentComments]);

  const documentCommentsResolved = useMemo(() => {
    return documentComments?.filter((comment) => comment.status === "resolved") ?? [];
  }, [documentComments]);

  const documentCommentsOpen = useMemo(() => {
    return documentComments?.filter((comment) => comment.status === "open") ?? [];
  }, [documentComments]);

  const documentCommentsOpenCount = useMemo(() => {
    return documentCommentsOpen?.length || 0;
  }, [documentCommentsOpen]);

  const documentCommentsResolvedCount = useMemo(() => {
    return documentCommentsResolved?.length || 0;
  }, [documentCommentsResolved]);

  return {
    documentComments: documentComments ?? [],
    documentCommentsCount,
    documentCommentsOpen: documentCommentsOpen ?? [],
    documentCommentsOpenCount,
    documentCommentsResolved: documentCommentsResolved ?? [],
    documentCommentsResolvedCount,
  };
};
