"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type FieldDescriptionProps = ComponentProps<"p">;

export const FieldDescription: FC<FieldDescriptionProps> = ({ className, ...props }) => {
  return (
    <p
      data-slot="field-description"
      {...props}
      className={cn(
        "text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [:where([data-variant=legend])+*]:-mt-1.5",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
    />
  );
};

FieldDescription.displayName = "FieldDescription";
