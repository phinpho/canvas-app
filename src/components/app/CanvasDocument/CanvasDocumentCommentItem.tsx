"use client";

import { cn } from "cn";
import { MapPinCheck } from "lucide-react";
import { Activity, type ComponentProps, type FC, useCallback, useMemo, useState } from "react";
import { useDocumentCommentThreads } from "../../../hooks/useDocumentCommentThreads.js";
import type { DocumentCommentFields } from "../../../resources/database/DocumentComment.js";
import { Button } from "../../ui/Button/Button.js";
import { Card } from "../../ui/Card/Card.js";
import { CardAction } from "../../ui/Card/CardAction.js";
import { CardContent } from "../../ui/Card/CardContent.js";
import { CardFooter } from "../../ui/Card/CardFooter.js";
import { CardHeader } from "../../ui/Card/CardHeader.js";
import { CardTitle } from "../../ui/Card/CardTitle.js";
import { CommentForm } from "../../utils/Comment/CommentForm.js";
import { CommentThread } from "../../utils/Comment/CommentThread.js";

export type CanvasDocumentCommentItemProps = ComponentProps<typeof Card> & {
  documentComment: DocumentCommentFields;
};

export const CanvasDocumentCommentItem: FC<CanvasDocumentCommentItemProps> = ({
  documentComment,
  className,
  ...props
}) => {
  const [commentFormVisible, setCommentFormVisible] = useState<boolean>(false);
  const { documentCommentThreads } = useDocumentCommentThreads(documentComment.id);

  const commentCount = useMemo(() => documentCommentThreads.length, [documentCommentThreads]);

  const onReplyClickHandler = useCallback(() => {
    setCommentFormVisible((prev) => !prev);
  }, []);

  return (
    <Card {...props} className={cn("m-0 p-0 gap-0", className)}>
      <CardHeader className="p-0">
        <CardTitle>
          <Button className="h-auto" size="sm" variant="ghost">
            <MapPinCheck />
            {documentComment.positionX} x {documentComment.positionY}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <CommentThread commentId={documentComment.id} />
      </CardContent>
      <CardFooter className="flex flex-col w-full p-2 gap-2">
        <Activity mode={commentFormVisible ? "visible" : "hidden"}>
          <CommentForm
            commentId={documentComment.id}
            maxLength={180}
            status={documentComment.status}
          />
        </Activity>
        <div className="w-full flex items-center justify-between gap-2">
          <span>
            {commentCount} {commentCount === 1 ? "comment" : "comments"}
          </span>
          <CardAction>
            <Button onClick={onReplyClickHandler} size="xs" variant="outline">
              {commentFormVisible ? "Hide" : "Reply"}
            </Button>
          </CardAction>
        </div>
      </CardFooter>
    </Card>
  );
};

CanvasDocumentCommentItem.displayName = "CanvasDocumentCommentItem";
