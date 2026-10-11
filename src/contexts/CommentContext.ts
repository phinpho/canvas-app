import { type Context, createContext, type Dispatch, type RefObject } from "react";
import type {
  DocumentComment,
  DocumentCommentFields,
} from "../resources/database/DocumentComment.js";
import type {
  DocumentCommentThread,
  DocumentCommentThreadFields,
} from "../resources/database/DocumentCommentThread.js";

export type CommentPosition = {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
};

export type CommentThreadItem = {
  id: string;
  label?: string;
  content?: string;
};

export type CommentContextProps = {
  documentComment: DocumentComment | DocumentCommentFields;
  commentRef?: RefObject<HTMLDivElement | null>;
  documentCommentThreads?: (DocumentCommentThread | DocumentCommentThreadFields)[];
  id: string;
  showPopover: Dispatch<void>;
  hidePopover: Dispatch<void>;
};

export const CommentContext: Context<CommentContextProps | undefined> = createContext<
  CommentContextProps | undefined
>(undefined);
