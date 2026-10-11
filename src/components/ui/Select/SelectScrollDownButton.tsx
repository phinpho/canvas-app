"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";

export type SelectScrollDownButtonProps = ComponentProps<typeof SelectPrimitive.ScrollDownArrow>;

export const SelectScrollDownButton: FC<SelectScrollDownButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      {...props}
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 bottom-0 w-full",
        className,
      )}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
};

SelectScrollDownButton.displayName = "SelectScrollDownButton";
