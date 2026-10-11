"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type FieldSetProps = ComponentProps<"fieldset">;

export const FieldSet: FC<FieldSetProps> = ({ className, ...props }) => {
  return (
    <fieldset
      data-slot="field-set"
      {...props}
      className={cn(
        "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className,
      )}
    />
  );
};

FieldSet.displayName = "FieldSet";
