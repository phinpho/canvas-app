import Dexie, { type EntityTable } from "dexie";
import { CanvasDocument } from "./CanvasDocument.js";
import { DocumentComment } from "./DocumentComment.js";
import { DocumentCommentThread } from "./DocumentCommentThread.js";
import type { DocumentObject } from "./DocumentObject.js";

export class CanvasApp extends Dexie {
  public documents!: EntityTable<CanvasDocument, "id">;
  public comments!: EntityTable<DocumentComment, "id">;
  public commentThreads!: EntityTable<DocumentCommentThread, "id">;
  public objects!: EntityTable<DocumentObject, "id">;

  constructor() {
    super("CanvasApp", {});

    this.version(1).stores({
      comments:
        "&id, documentId, [id+documentId], user, createdAt, updatedAt, status, positionX, positionY",
      commentThreads: "&id, commentId, [id+commentId], user, content, createdAt, updatedAt",
      documents: "&id, user, name, description, createdAt, updatedAt",
      objects:
        "&id, documentId, [id+documentId], user, type, positionX, positionY, dimensionWidth, dimensionsHeight, editingBy, createdAt, updatedAt",
    });

    this.documents.mapToClass(CanvasDocument);
    this.comments.mapToClass(DocumentComment);
    this.commentThreads.mapToClass(DocumentCommentThread);
  }
}
