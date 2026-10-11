"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg";
};

export const Avatar: FC<AvatarProps> = ({ className, size = "default", ...props }) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      {...props}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className,
      )}
      data-size={size}
    />
  );
};

Avatar.displayName = "Avatar";
