import { Entity } from "dexie";
import type { CanvasApp } from "./CanvasApp.js";
import type { DocumentCommentThread } from "./DocumentCommentThread.js";

export type DocumentCommentStatusType = "open" | "resolved";

export type DocumentCommentFields = {
  id: string;
  documentId: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  status: DocumentCommentStatusType;
  positionX: number;
  positionY: number;
  threads?: DocumentCommentThread[];
};

export class DocumentComment extends Entity<CanvasApp> implements DocumentCommentFields {
  public id!: string;
  public documentId!: string;
  public user!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public status!: DocumentCommentStatusType;
  public positionX!: number;
  public positionY!: number;
  public threads?: DocumentCommentThread[];
}
