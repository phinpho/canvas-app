export type ToastType = "success" | "error" | "warning" | "info" | "loading";

export const isToastType = (value?: unknown): value is ToastType => {
  if (typeof value !== "string") return false;

  return (
    value === "error" ||
    value === "info" ||
    value === "loading" ||
    value === "success" ||
    value === "warning"
  );
};
