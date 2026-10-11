"use client";

import { cn } from "cn";
import {
  type ChangeEvent,
  type ComponentProps,
  type FC,
  type SubmitEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { useAuth } from "../../../hooks/useAuth.js";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { type CreateCommentResult, createComment } from "../../../utils/createComment.js";
import type { ButtonOnClickHandler } from "../../ui/Button/Button.js";
import { Checkbox } from "../../ui/Checkbox/Checkbox.js";
import { Field } from "../../ui/Field/Field.js";
import { FieldLabel } from "../../ui/Field/FieldLabel.js";
import { InputGroup } from "../../ui/InputGroup/InputGroup.js";
import { InputGroupAddon } from "../../ui/InputGroup/InputGroupAddon.js";
import { InputGroupButton } from "../../ui/InputGroup/InputGroupButton.js";
import { InputGroupText } from "../../ui/InputGroup/InputGroupText.js";
import { InputGroupTextarea } from "../../ui/InputGroup/InputGroupTextarea.js";
import { Label } from "../../ui/Label/Label.js";

export type CommentFormProps = ComponentProps<"form"> & {
  documentId?: string;
  commentId?: string;
  maxLength?: number;
  disabled?: boolean;
  positionX?: number;
  positionY?: number;
  status?: "resolved" | "open";
  onAfterCreateComment?: (result: CreateCommentResult) => void | Promise<void>;
};

export const CommentForm: FC<CommentFormProps> = ({
  id,
  className,
  documentId,
  commentId,
  maxLength,
  positionX,
  positionY,
  onAfterCreateComment,
  disabled = false,
  status = "open",
  ...props
}) => {
  const { user } = useAuth();
  const [commentState, setCommentState] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isPending, startTransition] = useTransition();
  const currentId = useCurrentId(id);
  const textareaId = useMemo(() => `${commentId}-comment-${currentId}`, [commentId, currentId]);
  const textareaName = useMemo(() => `${commentId}-comment-new`, [commentId]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentState(e.target.value);
  }, []);

  const onCommentSubmitHandler: SubmitEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      startTransition(async () => {
        if (!user) return;
        const formData = new FormData(e.currentTarget);
        const commentContent = formData.get(textareaName);

        if (commentContent && typeof commentContent === "string" && commentContent.trim() !== "") {
          const nextStatus = formData.get(`${textareaName}-status`);
          const resolve =
            nextStatus === "resolved" ? true : nextStatus === "open" ? false : undefined;

          const result = await createComment({
            commentId,
            content: commentContent.trim(),
            documentId,
            positionX,
            positionY,
            resolve,
            user: user.username,
          });

          setCommentState("");
          e.target.reset();
          if (typeof onAfterCreateComment === "function") {
            await onAfterCreateComment(result);
          }
        }
      });
    },
    [user, commentId, documentId, positionX, positionY, textareaName, onAfterCreateComment],
  );

  const charCount = useMemo(() => {
    if (commentState === undefined) {
      return 0;
    }

    return commentState.length;
  }, [commentState]);

  const hasExceededMaxLength = useMemo(() => {
    if (maxLength !== undefined && charCount > maxLength) {
      return true;
    }

    return false;
  }, [charCount, maxLength]);

  const buttonDisabled = useMemo(() => {
    return isPending || hasExceededMaxLength || charCount === 0;
  }, [hasExceededMaxLength, charCount, isPending]);

  const onClickHandler: ButtonOnClickHandler = useCallback(
    (e) => {
      if (buttonDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [buttonDisabled],
  );

  if (!user) return;

  return (
    <form
      {...props}
      className={cn("flex flex-row w-full gap-2", className)}
      id={currentId}
      onSubmit={onCommentSubmitHandler}
    >
      <Field>
        <FieldLabel className="sr-only" htmlFor={textareaId}>
          Comment
        </FieldLabel>
        <InputGroup className={cn("bg-background text-foreground", className)}>
          <InputGroupTextarea
            aria-invalid={hasExceededMaxLength}
            disabled={disabled}
            id={id}
            name={textareaName}
            onChange={onChangeHandler}
            placeholder="Write a comment..."
            ref={textareaRef}
            value={commentState}
          />
          <InputGroupAddon align="block-end">
            {maxLength !== undefined && (
              <InputGroupText>
                {charCount}/{maxLength}
              </InputGroupText>
            )}
            {commentId !== undefined && (status === "open" || status === "resolved") && (
              <InputGroupText>
                <Label>
                  <Checkbox
                    id={`${id}-status`}
                    name={`${textareaName}-status`}
                    value={status === "open" ? "resolved" : "open"}
                  />
                  <span>{status === "open" ? "Mark as resolved" : "Mark as open"}</span>
                </Label>
              </InputGroupText>
            )}
            <InputGroupButton
              aria-disabled={disabled || buttonDisabled}
              className={cn("ml-auto", buttonDisabled && "cursor-not-allowed opacity-50")}
              onClick={onClickHandler}
              size="sm"
              type={buttonDisabled ? "button" : "submit"}
              variant="default"
            >
              Comment
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  );
};

CommentForm.displayName = "CommentForm";
