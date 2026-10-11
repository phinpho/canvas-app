import { Toast } from "@base-ui/react/toast";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ToastViewportProps = ComponentProps<typeof Toast.Viewport>;

export const ToastViewport: FC<ToastViewportProps> = ({ className, ...props }) => {
  return (
    <Toast.Viewport
      data-slot="toast-viewport"
      {...props}
      className={cn(
        "pointer-events-none fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-sm outline-none sm:right-4 sm:left-auto sm:mx-0 sm:w-full",
        className,
      )}
    />
  );
};

ToastViewport.displayName = "ToastViewport";
