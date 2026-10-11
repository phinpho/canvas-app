"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Panel>;

export const TabsContent: FC<TabsContentProps> = ({ className, ...props }) => {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      {...props}
      className={cn("text-sm flex-1 outline-none", className)}
    />
  );
};

TabsContent.displayName = "TabsContent";
