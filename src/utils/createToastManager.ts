import { Toast, type ToastManager as ToastManagerType } from "@base-ui/react/toast";

export type ToastManagerEvent = {
  action: "add" | "close" | "update" | "promise";
  options: unknown;
};

export type ToastManager<T extends object = object> = ToastManagerType<T>;

export const createToastManager = <T extends object = object>(): ToastManager<T> => {
  return Toast.createToastManager();
};
