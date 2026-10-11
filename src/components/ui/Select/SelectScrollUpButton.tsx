"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "cn";
import { ChevronUpIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";

export type SelectScrollUpButtonProps = ComponentProps<typeof SelectPrimitive.ScrollUpArrow>;

export const SelectScrollUpButton: FC<SelectScrollUpButtonProps> = ({ className, ...props }) => {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      {...props}
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 top-0 w-full",
        className,
      )}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
};

SelectScrollUpButton.displayName = "SelectScrollUpButton";
