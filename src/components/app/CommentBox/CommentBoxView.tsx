"use client";

import { cn } from "cn";
import { XIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type FC, useCallback } from "react";
import { useComment } from "../../../hooks/useComment.js";
import { Button } from "../../ui/Button/Button.js";
import { Card } from "../../ui/Card/Card.js";
import { CardAction } from "../../ui/Card/CardAction.js";
import { CardContent } from "../../ui/Card/CardContent.js";
import { CardDescription } from "../../ui/Card/CardDescription.js";
import { CardFooter } from "../../ui/Card/CardFooter.js";
import { CardHeader } from "../../ui/Card/CardHeader.js";
import { CardTitle } from "../../ui/Card/CardTitle.js";
import { CommentForm } from "../../utils/Comment/CommentForm.js";
import { CommentThread } from "../../utils/Comment/CommentThread.js";

export type CommentBoxViewProps = ComponentPropsWithoutRef<"div">;

export const CommentBoxView: FC<CommentBoxViewProps> = ({ children, className, ...props }) => {
  const { documentComment, commentRef, hidePopover } = useComment();

  const onCloseClickHandler = useCallback(() => {
    hidePopover();
  }, [hidePopover]);

  return (
    <div
      {...props}
      className={cn("absolute bg-transparent w-md h-fit p-px m-0", className)}
      popover="manual"
      ref={commentRef}
      style={{
        left: documentComment.positionX,
        top: documentComment.positionY,
      }}
    >
      <Card className="w-full h-full m-0 pi-0">
        <CardHeader>
          <CardTitle>
            Comment ({`${documentComment.positionX}x${documentComment.positionY}`})
          </CardTitle>
          <CardDescription>{documentComment.user}</CardDescription>
          <CardAction>
            <Button onClick={onCloseClickHandler} size="icon-sm" variant="ghost">
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <CommentThread commentId={documentComment.id} />
        </CardContent>
        <CardFooter>
          <CommentForm commentId={documentComment.id} />
        </CardFooter>
      </Card>
    </div>
  );
};
