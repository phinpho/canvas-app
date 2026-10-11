import { use } from "react";
import { CommentsContext } from "../contexts/CommentsContext.js";

export const useComments = () => {
  const commentsContext = use(CommentsContext);

  if (!commentsContext) {
    throw new Error("useComments must be used within a <CommentsProvider>");
  }

  return commentsContext;
};
