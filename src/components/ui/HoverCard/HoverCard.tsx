"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import type { ComponentProps, FC } from "react";

export type HoverCardProps = ComponentProps<typeof PreviewCardPrimitive.Root>;

export const HoverCard: FC<HoverCardProps> = ({ ...props }) => {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
};

HoverCard.displayName = "HoverCard";
