"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type LabelProps = ComponentProps<"label">;

export const Label: FC<LabelProps> = ({ className, ...props }) => {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: the <Label> component receives all properties of a native label
    <label
      data-slot="label"
      {...props}
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
    />
  );
};

Label.displayName = "Label";
