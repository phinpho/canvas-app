"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "cn";
import { ChevronRightIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";

export type ContextMenuSubTriggerProps = ComponentProps<
  typeof ContextMenuPrimitive.SubmenuTrigger
> & {
  inset?: boolean;
};

export const ContextMenuSubTrigger: FC<ContextMenuSubTriggerProps> = ({
  className,
  inset,
  children,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      {...props}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-inset={inset}
    >
      {children}
      <ChevronRightIcon className="cn-rtl-flip ml-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
};

ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";
