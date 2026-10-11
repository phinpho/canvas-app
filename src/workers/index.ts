import { updateDocumentObject } from "./updateDocumentObject.js";

self.addEventListener("message", async (event: MessageEvent) => {
  if (event.data.type === "updateDocumentObject") {
    const { documentId, editingBy, id, positionX, positionY, width, height } = event.data.payload;
    await updateDocumentObject(id, documentId, editingBy, positionX, positionY, width, height);
  }
});
