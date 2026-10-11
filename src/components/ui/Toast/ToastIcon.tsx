"use client";

import { cn } from "cn";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { type ComponentProps, type FC, useMemo } from "react";
import type { ToastType } from "../../../utils/isToastType.js";

export type ToastIconProps = Omit<ComponentProps<"span">, "children"> & {
  type: ToastType;
};

export const ToastIcon: FC<ToastIconProps> = ({ type, className, ...props }) => {
  const icon = useMemo(() => {
    switch (type) {
      case "success":
        return <CircleCheckIcon aria-hidden="true" />;
      case "info":
        return <InfoIcon aria-hidden="true" />;
      case "error":
        return <OctagonXIcon aria-hidden="true" />;
      case "warning":
        return <TriangleAlertIcon aria-hidden="true" />;
      case "loading":
        return <Loader2Icon aria-hidden="true" />;
      default:
        return null;
    }
  }, [type]);

  return icon !== null ? (
    <span
      className={cn(
        "shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="toast-icon"
      {...props}
    >
      {icon}
    </span>
  ) : null;
};

ToastIcon.displayName = "ToastIcon";
