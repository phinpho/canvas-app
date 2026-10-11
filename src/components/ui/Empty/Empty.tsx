import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type EmptyProps = ComponentProps<"div">;

export const Empty: FC<EmptyProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="empty"
      {...props}
      className={cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
        className,
      )}
    />
  );
};

Empty.displayName = "Empty";
