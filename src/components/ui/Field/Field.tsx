"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { type FieldVariantProps, fieldVariants } from "./fieldVariants.js";

export type FieldProps = ComponentProps<"div"> & FieldVariantProps;

export const Field: FC<FieldProps> = ({ className, orientation = "vertical", ...props }) => {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <div> element is used as a container for grouping field elements
    <div
      data-slot="field"
      {...props}
      className={cn(fieldVariants({ orientation }), className)}
      data-orientation={orientation}
      role="group"
    />
  );
};

Field.displayName = "Field";
