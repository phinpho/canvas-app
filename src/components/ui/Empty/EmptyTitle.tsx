import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type EmptyTitleProps = ComponentProps<"div">;

export const EmptyTitle: FC<EmptyTitleProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="empty-title"
      {...props}
      className={cn("cn-font-heading text-sm font-medium tracking-tight", className)}
    />
  );
};

EmptyTitle.displayName = "EmptyTitle";
