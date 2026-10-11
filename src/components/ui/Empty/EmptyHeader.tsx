import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type EmptyHeaderProps = ComponentProps<"div">;

export const EmptyHeader: FC<EmptyHeaderProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="empty-header"
      {...props}
      className={cn("flex max-w-sm flex-col items-center gap-2", className)}
    />
  );
};

EmptyHeader.displayName = "EmptyHeader";
