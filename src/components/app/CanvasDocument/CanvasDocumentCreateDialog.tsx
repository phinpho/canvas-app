"use client";

import { type ComponentProps, type FC, type SubmitEventHandler, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth.js";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { newCanvasDocument } from "../../../resources/mutations/newCanvasDocument.js";
import { Button } from "../../ui/Button/Button.js";
import { Dialog, type DialogActions } from "../../ui/Dialog/Dialog.js";
import { DialogClose } from "../../ui/Dialog/DialogClose.js";
import { DialogContent } from "../../ui/Dialog/DialogContent.js";
import { DialogDescription } from "../../ui/Dialog/DialogDescription.js";
import { DialogFooter } from "../../ui/Dialog/DialogFooter.js";
import { DialogHeader } from "../../ui/Dialog/DialogHeader.js";
import { DialogTitle } from "../../ui/Dialog/DialogTitle.js";
import { DialogTrigger } from "../../ui/Dialog/DialogTrigger.js";
import { Field } from "../../ui/Field/Field.js";
import { FieldContent } from "../../ui/Field/FieldContent.js";
import { FieldLabel } from "../../ui/Field/FieldLabel.js";
import { Input } from "../../ui/Input/Input.js";
import { Textarea } from "../../ui/Textarea/Textarea.js";

export type CanvasDocumentCreateDialogProps = ComponentProps<typeof Button>;

export const CanvasDocumentCreateDialog: FC<CanvasDocumentCreateDialogProps> = ({
  id,
  children,
  ...props
}) => {
  const currentId = useCurrentId(id);
  const { user } = useAuth();
  const navigate = useNavigate();
  const dialogActionsRef = useRef<DialogActions>(null);

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!user) return;

      const formData = new FormData(e.currentTarget);
      const name = formData.get(`${currentId}-name`)?.toString().trim();
      const description = formData.get(`${currentId}-description`)?.toString().trim();

      if (name) {
        const id = await newCanvasDocument({
          description,
          name,
          user: user.username,
        });

        dialogActionsRef.current?.close();
        navigate(`/document/${id}/`, {
          viewTransition: true,
        });
      }
    },
    [navigate, user, currentId],
  );

  if (!user) return null;

  return (
    <Dialog actionsRef={dialogActionsRef}>
      <DialogTrigger render={<Button {...props} />}>{children}</DialogTrigger>
      <DialogContent id={currentId}>
        <DialogHeader>
          <DialogTitle>Create new Canvas</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new canvas. You can customize the name and
            settings for your canvas.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-4 pb-4">
            <Field>
              <FieldLabel htmlFor={`${currentId}-name`}>Name</FieldLabel>
              <FieldContent>
                <Input
                  id={`${currentId}-name`}
                  name={`${currentId}-name`}
                  placeholder="Enter canvas name"
                />
              </FieldContent>
            </Field>
            <Field>
              <FieldLabel htmlFor={`${currentId}-description`}>Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id={`${currentId}-description`}
                  name={`${currentId}-description`}
                  placeholder="Enter the description..."
                />
              </FieldContent>
            </Field>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

CanvasDocumentCreateDialog.displayName = "CanvasDocumentCreateDialog";
