import type { ComponentProps, FC } from "react";
import { ToastProvider } from "../../../providers/ToasterProvider.js";
import { ToastList } from "../Toast/ToastList.js";
import { ToastPortal } from "../Toast/ToastPortal.js";
import { ToastViewport } from "../Toast/ToastViewport.js";

export type ToasterProps = ComponentProps<typeof ToastProvider>;

export const Toaster: FC<ToasterProps> = ({ children, ...props }) => {
  return (
    <ToastProvider {...props}>
      {children}
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
};

Toaster.displayName = "Toaster";
