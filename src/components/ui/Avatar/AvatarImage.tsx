"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

export const AvatarImage: FC<AvatarImageProps> = ({ className, ...props }) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      {...props}
      className={cn("aspect-square size-full rounded-full object-cover", className)}
    />
  );
};

AvatarImage.displayName = "AvatarImage";
