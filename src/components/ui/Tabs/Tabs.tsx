"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type TabsProps = ComponentProps<typeof TabsPrimitive.Root>;

export const Tabs: FC<TabsProps> = ({ className, orientation = "horizontal", ...props }) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      {...props}
      className={cn("group/tabs flex gap-2 data-horizontal:flex-col", className)}
      data-orientation={orientation}
    />
  );
};

Tabs.displayName = "Tabs";
