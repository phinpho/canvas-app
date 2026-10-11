import type { ComponentProps, FC } from "react";
import { CommentProvider } from "../../../providers/CommentProvider.js";
import type {
  DocumentComment,
  DocumentCommentFields,
} from "../../../resources/database/DocumentComment.js";
import { CommentBoxView } from "./CommentBoxView.js";
export type CommentBoxProps = ComponentProps<typeof CommentBoxView> & {
  documentComment: DocumentComment | DocumentCommentFields;
};

export const CommentBox: FC<CommentBoxProps> = ({ documentComment, ...props }) => {
  return (
    <CommentProvider documentComment={documentComment}>
      <CommentBoxView {...props} />
    </CommentProvider>
  );
};

CommentBox.displayName = "CommentBox";
