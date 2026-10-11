"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type FieldGroupProps = ComponentProps<"div">;

export const FieldGroup: FC<FieldGroupProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="field-group"
      {...props}
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className,
      )}
    />
  );
};

FieldGroup.displayName = "FieldGroup";
