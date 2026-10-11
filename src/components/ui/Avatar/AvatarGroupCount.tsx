import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type AvatarGroupCountProps = ComponentProps<"div">;

export const AvatarGroupCount: FC<AvatarGroupCountProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="avatar-group-count"
      {...props}
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className,
      )}
    />
  );
};

AvatarGroupCount.displayName = "AvatarGroupCount";
