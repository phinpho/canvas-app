"use client";

import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Separator } from "../Separator/Separator.js";

export type FieldSeparatorProps = ComponentProps<"div">;

export const FieldSeparator: FC<FieldSeparatorProps> = ({ children, className, ...props }) => {
  return (
    <div
      data-slot="field-separator"
      {...props}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className,
      )}
      data-content={!!children}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {Boolean(children) && (
        <span
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
};

FieldSeparator.displayName = "FieldSeparator";
