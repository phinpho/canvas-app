import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import { db } from "../resources/database/database.js";

export const useDocumentObjectIds = (documentId?: string): string[] => {
  const documentObjectIds = useLiveQuery(() => {
    if (!documentId) return [];
    return db.objects.where("documentId").equals(documentId).primaryKeys();
  }, [documentId]);

  return useMemo(() => documentObjectIds ?? [], [documentObjectIds]);
};
