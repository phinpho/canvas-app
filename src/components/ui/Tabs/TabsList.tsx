"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { type TabsListVariantProps, tabsListVariants } from "./tabsListVariants.js";

export type TabsListProps = ComponentProps<typeof TabsPrimitive.List> & TabsListVariantProps;

export const TabsList: FC<TabsListProps> = ({ className, variant = "default", ...props }) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      {...props}
      className={cn(tabsListVariants({ variant }), className)}
      data-variant={variant}
    />
  );
};

TabsList.displayName = "TabsList";
