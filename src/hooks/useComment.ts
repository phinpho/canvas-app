import { use } from "react";
import { CommentContext } from "../contexts/CommentContext.js";

export const useComment = () => {
  const commentContext = use(CommentContext);

  if (!commentContext) {
    throw new Error("useComment must be used within a <CommentProvider>");
  }

  return commentContext;
};
