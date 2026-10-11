import { Entity } from "dexie";
import type { MODEL_SAMPLES } from "../../constants/modelSamples.js";
import type { CanvasApp } from "./CanvasApp.js";

export type DocumentObjectType = "card" | "scene3d";

export type DocumentObjectFields = {
  id: string;
  documentId: string;
  user: string;
  type: DocumentObjectType;
  positionX: number;
  positionY: number;
  dimensionWidth: number;
  dimensionHeight: number;
  name?: string;
  editingBy?: string | null;
  createdAt: Date;
  updatedAt: Date;
  modelSample?: (typeof MODEL_SAMPLES)[number]["value"];
};

export class DocumentObject extends Entity<CanvasApp> implements DocumentObjectFields {
  public id!: string;
  public documentId!: string;
  public user!: string;
  public type!: DocumentObjectType;
  public positionX!: number;
  public positionY!: number;
  public dimensionWidth!: number;
  public dimensionHeight!: number;
  public name?: string;
  public editingBy?: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public modelSample?: (typeof MODEL_SAMPLES)[number]["value"];
}
