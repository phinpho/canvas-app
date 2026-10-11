import { Toast } from "@base-ui/react/toast";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type ToastContentProps = ComponentProps<typeof Toast.Content>;

export const ToastContent: FC<ToastContentProps> = ({ className, ...props }) => {
  return (
    <Toast.Content
      data-slot="toast-content"
      {...props}
      className={cn(
        "flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className,
      )}
    />
  );
};

ToastContent.displayName = "ToastContent";
