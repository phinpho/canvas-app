import { Toast } from "@base-ui/react/toast";
import { cn } from "cn";
import { XIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { Button } from "../Button/Button.js";

export type ToastCloseProps = ComponentProps<typeof Toast.Close>;

export const ToastClose: FC<ToastCloseProps> = ({
  className,
  children,
  render = <Button size="icon-sm" variant="ghost" />,
  ...props
}) => {
  return (
    <Toast.Close
      aria-label="Close toast"
      className={cn(
        "relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground",
        className,
      )}
      data-slot="toast-close"
      render={render}
      {...props}
    >
      {children ?? <XIcon aria-hidden="true" />}
    </Toast.Close>
  );
};

ToastClose.displayName = "ToastClose";
