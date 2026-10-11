import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../resources/database/database.js";

export const useDocumentObject = (id: string, documentId?: string) => {
  const documentObject = useLiveQuery(() => db.objects.get({ documentId, id }), [id, documentId]);

  return documentObject;
};
