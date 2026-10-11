import {
  type Context,
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import type {
  DocumentComment,
  DocumentCommentFields,
} from "../resources/database/DocumentComment.js";
import type { CommentPosition, CommentThreadItem } from "./CommentContext.js";

export type CommentsComment = {
  commentBoxRef?: RefObject<HTMLDivElement | null> | undefined;
  position: { x: number; y: number };
  boxPosition?: CommentPosition;
  label?: string;
  thread?: CommentThreadItem[];
  visible?: boolean;
};

export type CommentsContextProps = {
  documentId?: string;
  documentComments?: DocumentComment[] | DocumentCommentFields[];
  showCommentPopover: Dispatch<string>;
  hideCommentPopover: Dispatch<string>;
  commentRefs: Record<string, RefObject<HTMLDivElement | null>>;
  setCommentRefs: Dispatch<SetStateAction<Record<string, RefObject<HTMLDivElement | null>>>>;
};

export const CommentsContext: Context<CommentsContextProps | undefined> = createContext<
  CommentsContextProps | undefined
>(undefined);
