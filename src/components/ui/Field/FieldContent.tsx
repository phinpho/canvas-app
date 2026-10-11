"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type FieldContentProps = ComponentProps<"div">;

export const FieldContent: FC<FieldContentProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="field-content"
      {...props}
      className={cn("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", className)}
    />
  );
};

FieldContent.displayName = "FieldContent";
