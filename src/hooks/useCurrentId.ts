import { useId, useMemo } from "react";

export type UseCurrentIdHook = (id?: string) => string;

export const useCurrentId: UseCurrentIdHook = (id) => {
  const generatedId = useId();
  const currentId = useMemo(() => id ?? generatedId, [id, generatedId]);

  return currentId;
};
