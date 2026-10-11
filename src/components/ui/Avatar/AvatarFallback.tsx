"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

export const AvatarFallback: FC<AvatarFallbackProps> = ({ className, ...props }) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      {...props}
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className,
      )}
    />
  );
};

AvatarFallback.displayName = "AvatarFallback";
