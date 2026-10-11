import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type EmptyContentProps = ComponentProps<"div">;

export const EmptyContent: FC<EmptyContentProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="empty-content"
      {...props}
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
        className,
      )}
    />
  );
};

EmptyContent.displayName = "EmptyContent";
