"use client";

import { cn } from "cn";
import {
  type ComponentProps,
  type FC,
  type SubmitEvent,
  useCallback,
  useRef,
  useTransition,
} from "react";
import { MODEL_SAMPLES } from "../../../constants/modelSamples.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { useDocumentContextMenu } from "../../../hooks/useDocumentContextMenu.js";
import { newDocumentObject } from "../../../resources/mutations/newDocumentObject.js";
import { Button } from "../../ui/Button/Button.js";
import { Dialog, type DialogActions } from "../../ui/Dialog/Dialog.js";
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
import { Select } from "../../ui/Select/Select.js";
import { SelectContent } from "../../ui/Select/SelectContent.js";
import { SelectItem } from "../../ui/Select/SelectItem.js";
import { SelectTrigger } from "../../ui/Select/SelectTrigger.js";
import { SelectValue } from "../../ui/Select/SelectValue.js";

export type DocumentContextMenuAdd3DSceneProps = ComponentProps<typeof Button>;

export const DocumentContextMenuAdd3DScene: FC<DocumentContextMenuAdd3DSceneProps> = ({
  id,
  children,
  className,
  variant = "ghost",
  size = "lg",
  ...props
}) => {
  const { user } = useAuth();
  const [isPending, startTransition] = useTransition();
  const currentId = useCurrentId(id);
  const dialogActionsRef = useRef<DialogActions>(null);
  const { documentId, position } = useDocumentContextMenu();

  const onSubmitHandler = useCallback(
    (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (!user) return;
      if (!documentId) return;

      const formData = new FormData(e.currentTarget);
      const name = formData.get(`${currentId}-input-name`);
      const model = formData.get(`${currentId}-input-model`);

      if (
        typeof model === "string" &&
        MODEL_SAMPLES.findIndex((sample) => sample.value === model) >= 0
      ) {
        startTransition(async () => {
          if (!user) return;
          if (!documentId) return;

          const nameValue = typeof name === "string" && name.trim() !== "" ? name : undefined;

          await newDocumentObject({
            dimensionHeight: 100,
            dimensionWidth: 100,
            documentId,
            modelSample: model as (typeof MODEL_SAMPLES)[number]["value"],
            name: nameValue,
            positionX: position?.x ?? 0,
            positionY: position?.y ?? 0,
            type: "scene3d",
            user: user.username,
          });

          dialogActionsRef.current?.close();
        });
      }
    },
    [user, currentId, documentId, position],
  );

  if (!user) return null;

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
      <DialogContent id={`${currentId}-content`}>
        <DialogHeader>
          <DialogTitle>New 3D scene</DialogTitle>
          <DialogDescription>Add a new 3D scene here</DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <Field>
            <FieldLabel htmlFor={`${currentId}-input-name`}>Name</FieldLabel>
            <FieldContent>
              <Input
                id={`${currentId}-input-name`}
                name={`${currentId}-input-name`}
                placeholder="Name"
              />
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel htmlFor={`${currentId}-input-model`}>Model sample</FieldLabel>
            <FieldContent>
              <Select
                disabled={isPending}
                id={`${currentId}-input-model`}
                items={MODEL_SAMPLES}
                name={`${currentId}-input-model`}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sample" />
                </SelectTrigger>
                <SelectContent>
                  {MODEL_SAMPLES.map((sample) => (
                    <SelectItem key={sample.value} value={sample.value}>
                      {sample.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>
          <DialogFooter>
            <Button disabled={isPending} type="submit">
              Add 3D scene
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

DocumentContextMenuAdd3DScene.displayName = "DocumentContextMenuAdd3DScene";
