import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DialogHeaderProps = ComponentProps<"div">;

export const DialogHeader: FC<DialogHeaderProps> = ({ className, ...props }) => {
  return (
    <div data-slot="dialog-header" {...props} className={cn("flex flex-col gap-2", className)} />
  );
};

DialogHeader.displayName = "DialogHeader";
