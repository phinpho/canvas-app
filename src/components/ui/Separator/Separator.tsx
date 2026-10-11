"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type SeparatorProps = ComponentProps<typeof SeparatorPrimitive>;

export const Separator: FC<SeparatorProps> = ({
  className,
  orientation = "horizontal",
  ...props
}) => {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      {...props}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className,
      )}
      orientation={orientation}
    />
  );
};

Separator.displayName = "Separator";
