import { Toast } from "@base-ui/react/toast";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ToastTitleProps = ComponentProps<typeof Toast.Title>;

export const ToastTitle: FC<ToastTitleProps> = ({ className, ...props }) => {
  return (
    <Toast.Title
      data-slot="toast-title"
      {...props}
      className={cn("text-sm font-medium", className)}
    />
  );
};

ToastTitle.displayName = "ToastTitle";
