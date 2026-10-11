import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type AvatarGroupProps = ComponentProps<"div">;

export const AvatarGroup: FC<AvatarGroupProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="avatar-group"
      {...props}
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className,
      )}
    />
  );
};

AvatarGroup.displayName = "AvatarGroup";
