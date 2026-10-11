import { db } from "../resources/database/database.js";

export const updateDocumentObject = async (
  documentObjectId: string,
  documentId: string,
  editingBy?: string | null,
  positionX?: number,
  positionY?: number,
  width?: number,
  height?: number,
) => {
  return await db.transaction("rw", [db.documents, db.objects], async (tx) => {
    const now = new Date();
    const document = await tx.documents.get(documentId);
    if (!document) {
      throw new Error(`Document with id ${documentId} not found`);
    }

    const documentObject = await tx.objects.get(documentObjectId);
    if (!documentObject) {
      throw new Error(`Document object with id ${documentObjectId} not found`);
    }

    const result = await tx.objects.update(documentObjectId, {
      dimensionHeight: height ?? documentObject.dimensionHeight,
      dimensionWidth: width ?? documentObject.dimensionWidth,
      editingBy: editingBy ?? null,
      positionX: positionX ?? documentObject.positionX,
      positionY: positionY ?? documentObject.positionY,
      updatedAt: now,
    });

    if (result === 0) {
      throw new Error(`Failed to update document object with id ${documentObjectId}`);
    }

    const documentResult = await tx.documents.update(documentId, { updatedAt: now });

    if (documentResult === 0) {
      throw new Error(`Failed to update document with id ${documentId}`);
    }

    return result;
  });
};
