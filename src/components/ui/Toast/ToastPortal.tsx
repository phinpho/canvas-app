import { Toast } from "@base-ui/react/toast";
import type { ComponentProps, FC } from "react";

export type ToastPortalProps = ComponentProps<typeof Toast.Portal>;

export const ToastPortal: FC<ToastPortalProps> = ({ ...props }) => {
  return <Toast.Portal data-slot="toast-portal" {...props} />;
};

ToastPortal.displayName = "ToastPortal";
