"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type FieldTitleProps = ComponentProps<"div">;

export const FieldTitle: FC<FieldTitleProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="field-title"
      {...props}
      className={cn(
        "flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50",
        className,
      )}
    />
  );
};

FieldTitle.displayName = "FieldTitle";
