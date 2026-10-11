import { uuid } from "../../utils/uuid.js";
import type { CanvasDocumentFields } from "../database/CanvasDocument.js";
import { db } from "../database/database.js";

export const newCanvasDocument = async ({
  user,
  ...data
}: Omit<CanvasDocumentFields, "id" | "createdAt" | "updatedAt">) => {
  const id = uuid();
  const now = new Date();

  return await db.transaction("rw", [db.documents], async (tx) => {
    if (!user) {
      throw new Error("User is required to create a new canvas document.");
    }

    return await tx.documents.add(
      {
        ...data,
        createdAt: now,
        id,
        updatedAt: now,
        user,
      },
      id,
    );
  });
};
