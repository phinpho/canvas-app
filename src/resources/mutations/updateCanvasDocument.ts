import type { CanvasDocumentFields } from "../database/CanvasDocument.js";
import { db } from "../database/database.js";

export const updateCanvasDocument = async ({
  id,
  user,
  ...data
}: Partial<Omit<CanvasDocumentFields, "id" | "createdAt" | "updatedAt">> & {
  id: string;
  user: string;
}) => {
  const now = new Date();

  return await db.transaction("rw", [db.documents], async (tx) => {
    const existingDocument = await tx.documents.get(id);

    if (!existingDocument) {
      throw new Error(`Canvas document with id ${id} does not exist.`);
    }

    if (existingDocument.user !== user) {
      throw new Error("User is not authorized to update this canvas document.");
    }

    const updatedDocument = {
      ...existingDocument,
      ...data,
      updatedAt: now,
    };

    const result = await tx.documents.update(id, {
      ...existingDocument,
      ...data,
      updatedAt: now,
    });

    if (result === 0) {
      throw new Error(`Failed to update canvas document with id ${id}.`);
    }

    return updatedDocument;
  });
};
