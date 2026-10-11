import { Entity } from "dexie";
import type { CanvasApp } from "./CanvasApp.js";
import type { DocumentComment } from "./DocumentComment.js";
import type { DocumentObject } from "./DocumentObject.js";

export type CanvasDocumentFields = {
  id: string;
  name: string;
  user: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  comments?: DocumentComment[];
  objects?: DocumentObject[];
};

export class CanvasDocument extends Entity<CanvasApp> implements CanvasDocumentFields {
  public id!: string;
  public name!: string;
  public user!: string;
  public description?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public comments?: DocumentComment[];
  public objects?: DocumentObject[];
}
