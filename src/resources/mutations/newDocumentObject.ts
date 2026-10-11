import { uuid } from "../../utils/uuid.js";
import type { DocumentObjectFields } from "../database/DocumentObject.js";
import { db } from "../database/database.js";

export const newDocumentObject = async ({
  documentId,
  user,
  type,
  ...data
}: Omit<DocumentObjectFields, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  const id = uuid();
  const now = new Date();

  return await db.transaction("rw", [db.documents, db.objects], async (tx) => {
    if (!user) {
      throw new Error("User is required to create a new document object.");
    }

    const document = await tx.documents.get(documentId);
    if (!document) {
      throw new Error(`Document with id ${documentId} not found.`);
    }

    return await tx.objects.add(
      {
        createdAt: now,
        documentId,
        editingBy: undefined,
        id,
        type,
        updatedAt: now,
        user,
        ...data,
      },
      id,
    );
  });
};
