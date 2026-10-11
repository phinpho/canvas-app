import { Toast } from "@base-ui/react/toast";
import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Button } from "../Button/Button.js";

export type ToastActionProps = ComponentProps<typeof Toast.Action>;

export const ToastAction: FC<ToastActionProps> = ({
  className,
  render = <Button size="sm" variant="outline" />,
  ...props
}) => {
  return (
    <Toast.Action
      data-slot="toast-action"
      {...props}
      className={cn("text-sm", className)}
      render={render}
    />
  );
};

ToastAction.displayName = "ToastAction";
