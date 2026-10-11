"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";

export type ContextMenuCheckboxItemProps = ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
> & {
  inset?: boolean;
};

export const ContextMenuCheckboxItem: FC<ContextMenuCheckboxItemProps> = ({
  className,
  children,
  checked,
  inset,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      {...props}
      checked={checked}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-inset={inset}
    >
      <span className="pointer-events-none absolute right-2">
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
};

ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";
