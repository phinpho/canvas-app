"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants/mobile.js";

export type UseIsMobileHookReturn<T extends boolean | undefined = undefined> = T extends true
  ? [boolean, boolean | undefined]
  : T extends false | undefined
    ? boolean
    : never;

export const useIsMobile = <T extends boolean | undefined = undefined>(
  withReadyState: T = undefined as T,
): UseIsMobileHookReturn<T> => {
  const [isPending, setIsPending] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const onMediaQueryChangeHandler = useCallback(() => {
    setIsMobile(globalThis.innerWidth < MOBILE_BREAKPOINT);
    setIsPending(false);
  }, []);

  useEffect(() => {
    const mql = globalThis.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", onMediaQueryChangeHandler);
    if (globalThis.innerHeight) {
      setIsMobile(globalThis.innerWidth < MOBILE_BREAKPOINT);
      setIsPending(false);
    }

    return () => {
      mql.removeEventListener("change", onMediaQueryChangeHandler);
      setIsPending(true);
      setIsMobile(undefined);
    };
  }, [onMediaQueryChangeHandler]);

  return useMemo((): UseIsMobileHookReturn<T> => {
    if (withReadyState) {
      return [
        isPending,
        isMobile,
      ] satisfies UseIsMobileHookReturn<true> as UseIsMobileHookReturn<T>;
    }
    return !!isMobile satisfies UseIsMobileHookReturn<false> as UseIsMobileHookReturn<T>;
  }, [withReadyState, isMobile, isPending]);
};
