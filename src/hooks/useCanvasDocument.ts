import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import { db } from "../resources/database/database.js";

export const useCanvasDocument = (id?: string | undefined) => {
  const result = useLiveQuery(
    () =>
      db.transaction(
        "r",
        [db.documents, db.comments, db.commentThreads, db.objects],
        async (tx) => {
          if (!id) {
            return {
              canvasDocument: undefined,
              status: "idle",
            };
          }

          const canvasDocumentResult = await tx.documents.get(id);

          if (!canvasDocumentResult) {
            return {
              canvasDocument: undefined,
              status: "not_found",
            };
          }

          return {
            canvasDocument: canvasDocumentResult,
            status: "found",
          };
        },
      ),
    [id],
  );

  return useMemo(
    () => ({
      canvasDocument: result?.canvasDocument,
      status: result?.status ?? "idle",
    }),
    [result],
  );
};
