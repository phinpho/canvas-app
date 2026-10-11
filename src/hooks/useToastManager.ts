import {
  Toast,
  type ToastManagerAddOptions,
  type ToastManagerPositionerProps,
  type ToastManagerPromiseOptions,
  type ToastManagerUpdateOptions,
} from "@base-ui/react/toast";
import type { ReactNode, RefObject } from "react";

export type ToastObject<T extends object = object> = {
  /**
   * The unique identifier for the toast.
   */
  id: string;
  /**
   * The ref for the toast.
   */
  ref?: RefObject<HTMLElement | null> | undefined;
  /**
   * The title of the toast.
   */
  title?: ReactNode;
  /**
   * The type of the toast. Used to conditionally style the toast,
   * including conditionally rendering elements based on the type.
   */
  type?: string | undefined;
  /**
   * The description of the toast.
   */
  description?: ReactNode;
  /**
   * The amount of time (in ms) before the toast is auto dismissed.
   * A value of `0` will prevent the toast from being dismissed automatically.
   * @default 5000
   */
  timeout?: number | undefined;
  /**
   * The priority of the toast.
   * - `low` - The toast will be announced politely.
   * - `high` - The toast will be announced urgently.
   * @default 'low'
   */
  priority?: "low" | "high" | undefined;
  /**
   * The transition status of the toast.
   */
  transitionStatus?: "starting" | "ending" | undefined;
  /**
   * A counter that increments whenever the toast is updated or upserted.
   */
  updateKey?: number | undefined;
  /**
   * Determines if the toast was limited because the toast limit was exceeded.
   */
  limited?: boolean | undefined;
  /**
   * The height of the toast.
   */
  height?: number | undefined;
  /**
   * Callback function to be called when the toast is closed.
   */
  onClose?: (() => void) | undefined;
  /**
   * Callback function to be called when the toast is removed from the list after any animations are complete when closed.
   */
  onRemove?: (() => void) | undefined;
  /**
   * The props for the action button.
   */
  actionProps?: React.ComponentPropsWithoutRef<"button"> | undefined;
  /**
   * The props forwarded to the toast positioner element when rendering anchored toasts.
   */
  positionerProps?: ToastManagerPositionerProps | undefined;
  /**
   * Custom data for the toast.
   */
  data?: T | undefined;
};

export type UseToastManagerReturnValue<T extends object = object> = {
  toasts: ToastObject<T>[];
  add: <E extends T = T>(options: ToastManagerAddOptions<E>) => string;
  close: (toastId?: string) => void;
  update: <E extends T = T>(toastId: string, options: ToastManagerUpdateOptions<E>) => void;
  promise: <Value, E extends T = T>(
    promise: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, E>,
  ) => Promise<Value>;
};

export const useToastManager = <T extends object = object>(): UseToastManagerReturnValue<T> => {
  return Toast.useToastManager<T>();
};
