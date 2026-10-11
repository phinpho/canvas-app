"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";

export type ContextMenuRadioItemProps = ComponentProps<typeof ContextMenuPrimitive.RadioItem> & {
  inset?: boolean;
};

export const ContextMenuRadioItem: FC<ContextMenuRadioItemProps> = ({
  className,
  children,
  inset,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      {...props}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-inset={inset}
    >
      <span className="pointer-events-none absolute right-2">
        <ContextMenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
};

ContextMenuRadioItem.displayName = "ContextMenuRadioItem";
