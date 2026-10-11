import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../resources/database/database.js";

export const useCanvasDocuments = (user?: string) => {
  const canvasDocumentItems = useLiveQuery(
    () =>
      db.transaction("r", [db.documents], async (tx) => {
        if (user) {
          return (await tx.documents.where("user").equals(user).sortBy("updatedAt")).reverse();
        }
        return await tx.documents.orderBy("updatedAt").reverse().toArray();
      }),
    [user],
  );

  return {
    canvasDocumentItems,
  };
};
