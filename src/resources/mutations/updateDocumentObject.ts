import type { DocumentObjectFields } from "../database/DocumentObject.js";
import { db } from "../database/database.js";

export const updateDocumentObject = async ({
  id,
  editingBy,
  documentId,
  ...data
}: Partial<Omit<DocumentObjectFields, "createdAt" | "updatedAt" | "editingBy">> & {
  id: string;
  editingBy?: string | null;
  documentId: string;
}) => {
  const now = new Date();

  return await db.transaction("rw", [db.documents, db.objects], async (tx) => {
    const document = await tx.documents.get(documentId);
    if (!document) {
      throw new Error(`Document with id ${documentId} not found.`);
    }

    const existingObject = await tx.objects.get(id);
    if (!existingObject) {
      throw new Error(`Document object with id ${id} not found.`);
    }

    const result = await tx.objects.update(id, {
      ...data,
      createdAt: existingObject.createdAt,
      documentId,
      editingBy,
      updatedAt: now,
      user: existingObject.user,
    });

    if (result === 0) {
      throw new Error(`Failed to update document object with id ${id}.`);
    }

    return result;
  });
};
