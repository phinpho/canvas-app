import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import { db } from "../resources/database/database.js";

export const useCanvasDocuments = (user?: string) => {
  const result = useLiveQuery(
    () =>
      db.transaction("r", [db.documents], async (tx) => {
        if (user) {
          return {
            canvasDocumentItems: (
              await tx.documents.where("user").equals(user).sortBy("updatedAt")
            ).reverse(),
            status: "success",
          };
        }
        return {
          canvasDocumentItems: await tx.documents.orderBy("updatedAt").reverse().toArray(),
          status: "success",
        };
      }),
    [user],
  );

  return useMemo(() => {
    if (!result) {
      return {
        canvasDocumentItems: [],
        status: "idle",
      };
    }
    return result;
  }, [result]);
};
