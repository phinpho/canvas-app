import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import type { DocumentObject } from "../resources/database/DocumentObject.js";
import { db } from "../resources/database/database.js";

export const useDocumentObjects = (documentId?: string): DocumentObject[] => {
  const documentObjects = useLiveQuery(() => {
    if (!documentId) return [];
    return db.transaction("r", [db.documents, db.objects], async (tx) => {
      const canvasDocument = await tx.documents.get(documentId);
      if (!canvasDocument) return [];

      return await tx.objects.where("documentId").equals(documentId).sortBy("updatedAt");
    });
  }, [documentId]);

  return useMemo(() => documentObjects ?? [], [documentObjects]);
};
