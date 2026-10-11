"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type FieldLegendProps = ComponentProps<"legend"> & {
  variant?: "legend" | "label";
};

export const FieldLegend: FC<FieldLegendProps> = ({ className, variant = "legend", ...props }) => {
  return (
    <legend
      data-slot="field-legend"
      {...props}
      className={cn(
        "mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className,
      )}
      data-variant={variant}
    />
  );
};

FieldLegend.displayName = "FieldLegend";
