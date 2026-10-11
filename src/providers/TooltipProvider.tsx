"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import type { ComponentProps, FC } from "react";

export type TooltipProviderProps = ComponentProps<typeof TooltipPrimitive.Provider>;

export const TooltipProvider: FC<TooltipProviderProps> = ({ delay = 0, ...props }) => {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} delay={delay} />;
};

TooltipProvider.displayName = "TooltipProvider";
