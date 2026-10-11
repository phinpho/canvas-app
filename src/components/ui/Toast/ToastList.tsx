import type { FC } from "react";
import { useToastManager } from "../../../hooks/useToastManager.js";
import { isToastType } from "../../../utils/isToastType.js";
import { Toast } from "./Toast.js";
import { ToastAction } from "./ToastAction.js";
import { ToastClose } from "./ToastClose.js";
import { ToastContent } from "./ToastContent.js";
import { ToastDescription } from "./ToastDescription.js";
import { ToastIcon } from "./ToastIcon.js";
import { ToastTitle } from "./ToastTitle.js";

export type ToastListProps = {
  defaultType?: "info" | "success" | "warning" | "error" | "loading";
};

export const ToastList: FC<ToastListProps> = ({ defaultType = "info" }) => {
  const { toasts } = useToastManager();

  return toasts.map((toastItem) => (
    <Toast key={toastItem.id} toast={toastItem}>
      <ToastContent>
        <ToastIcon type={isToastType(toastItem.type) ? toastItem.type : defaultType} />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastAction />
        <ToastClose />
      </ToastContent>
    </Toast>
  ));
};

ToastList.displayName = "ToastList";
