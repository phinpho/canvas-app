import { Toast } from "@base-ui/react/toast";
import { cn } from "cn";
import type { FC } from "react";

export type ToastDescriptionProps = React.ComponentProps<typeof Toast.Description>;

export const ToastDescription: FC<ToastDescriptionProps> = ({ className, ...props }) => {
  return (
    <Toast.Description
      data-slot="toast-description"
      {...props}
      className={cn("text-sm text-muted-foreground", className)}
    />
  );
};

ToastDescription.displayName = "ToastDescription";
