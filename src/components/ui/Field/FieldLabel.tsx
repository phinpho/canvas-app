"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Label } from "../Label/Label.js";

export type FieldLabelProps = ComponentProps<typeof Label>;

export const FieldLabel: FC<FieldLabelProps> = ({ className, ...props }) => {
  return (
    <Label
      data-slot="field-label"
      {...props}
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className,
      )}
    />
  );
};

FieldLabel.displayName = "FieldLabel";
