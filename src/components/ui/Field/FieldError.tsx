"use client";

import { cn } from "cn";
import { type ComponentProps, type FC, type ReactNode, useMemo } from "react";
import { useCurrentId } from "../../../hooks/useCurrentId.js";

export type FieldErrorProps = ComponentProps<"div"> & {
  errors?: ({ message?: string } | undefined)[];
};

export const FieldError: FC<FieldErrorProps> = ({ id, className, children, errors, ...props }) => {
  const currentId = useCurrentId(id);

  const content: ReactNode = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors?.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1" id={`${currentId}-error-list`}>
        {uniqueErrors.map((error, index) =>
          error?.message ? <li key={`${currentId}-error-item-${index}`}>{error.message}</li> : null,
        )}
      </ul>
    );
  }, [children, errors, currentId]);

  if (!content) {
    return null;
  }

  return (
    <div
      data-slot="field-error"
      id={currentId}
      {...props}
      className={cn("text-sm font-normal text-destructive", className)}
      role="alert"
    >
      {content}
    </div>
  );
};

FieldError.displayName = "FieldError";
