"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import type { ComponentProps, FC } from "react";

export type HoverCardTriggerProps = ComponentProps<typeof PreviewCardPrimitive.Trigger>;

export const HoverCardTrigger: FC<HoverCardTriggerProps> = ({ ...props }) => {
  return <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;
};

HoverCardTrigger.displayName = "HoverCardTrigger";
