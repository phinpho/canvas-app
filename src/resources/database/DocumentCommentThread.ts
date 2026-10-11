import { Entity } from "dexie";
import type { CanvasApp } from "./CanvasApp.js";

export type DocumentCommentThreadFields = {
  id: string;
  commentId: string;
  user: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export class DocumentCommentThread
  extends Entity<CanvasApp>
  implements DocumentCommentThreadFields
{
  public id!: string;
  public commentId!: string;
  public user!: string;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}
