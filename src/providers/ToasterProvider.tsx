import { Toast } from "@base-ui/react/toast";
import type { ComponentProps, FC } from "react";

export type ToastProviderProps = ComponentProps<typeof Toast.Provider>;

export const ToastProvider: FC<ToastProviderProps> = ({ ...props }) => {
  return <Toast.Provider {...props} />;
};

ToastProvider.displayName = "ToastProvider";
