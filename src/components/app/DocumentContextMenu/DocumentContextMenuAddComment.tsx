"use client";

import { cn } from "cn";
import { type ComponentProps, type FC, useCallback, useRef } from "react";
import { useDocumentContextMenu } from "../../../hooks/useDocumentContextMenu.js";
import { Button } from "../../ui/Button/Button.js";
import { Dialog, type DialogActions } from "../../ui/Dialog/Dialog.js";
import { DialogContent } from "../../ui/Dialog/DialogContent.js";
import { DialogDescription } from "../../ui/Dialog/DialogDescription.js";
import { DialogHeader } from "../../ui/Dialog/DialogHeader.js";
import { DialogTitle } from "../../ui/Dialog/DialogTitle.js";
import { DialogTrigger } from "../../ui/Dialog/DialogTrigger.js";
import { CommentForm } from "../../utils/Comment/CommentForm.js";

export type DocumentContextMenuAddCommentProps = ComponentProps<typeof Button>;

export const DocumentContextMenuAddComment: FC<DocumentContextMenuAddCommentProps> = ({
  children,
  className,
  variant = "ghost",
  size = "lg",
  ...props
}) => {
  const dialogActionsRef = useRef<DialogActions>(null);
  const { documentId, position } = useDocumentContextMenu();

  const onAfterCreateCommentHandler = useCallback(() => {
    if (dialogActionsRef.current) {
      dialogActionsRef.current.close();
    }
  }, []);

  return (
    <Dialog actionsRef={dialogActionsRef} modal>
      <DialogTrigger
        render={
          <Button
            {...props}
            className={cn("w-full justify-start gap-2", className)}
            size={size}
            variant={variant}
          />
        }
      >
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New comment</DialogTitle>
          <DialogDescription>Add a new comment here</DialogDescription>
        </DialogHeader>
        <CommentForm
          documentId={documentId}
          onAfterCreateComment={onAfterCreateCommentHandler}
          positionX={position.x}
          positionY={position.y}
        />
      </DialogContent>
    </Dialog>
  );
};

DocumentContextMenuAddComment.displayName = "DocumentContextMenuAddComment";
