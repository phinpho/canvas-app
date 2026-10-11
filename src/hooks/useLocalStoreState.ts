"use client";

import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { LocalStoreInstance } from "../instances/LocalStoreInstance.js";

export type UseLocalStoreStateHook = <T>(
  localStore: LocalStoreInstance | RefObject<LocalStoreInstance | undefined> | undefined,
  key: string | string[],
  defaultValue?: T | (() => T),
) => [T | undefined, Dispatch<SetStateAction<T | undefined>>];

export const useLocalStoreState: UseLocalStoreStateHook = <T>(
  localStore: LocalStoreInstance | RefObject<LocalStoreInstance | undefined> | undefined,
  key: string | string[],
  defaultValue?: T | (() => T | undefined),
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] => {
  const localStoreInstance = useMemo(() => {
    return localStore && "current" in localStore && localStore.current instanceof LocalStoreInstance
      ? localStore.current
      : localStore && localStore instanceof LocalStoreInstance
        ? localStore
        : undefined;
  }, [localStore]);

  const [state, setState] = useState<T | undefined>(() => {
    if (!localStoreInstance) {
      if (defaultValue) {
        return defaultValue instanceof Function ? defaultValue() : defaultValue;
      }
      return undefined;
    }

    const storedValue = localStoreInstance.getItem<T>(key);

    if (storedValue !== undefined) {
      return storedValue;
    }

    if (defaultValue) {
      const result = defaultValue instanceof Function ? defaultValue() : defaultValue;
      localStoreInstance.setItem(key, result);
      return result;
    }

    return undefined;
  });

  const setLocalStoreState: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valueOrSetValue) => {
      setState((prevState) => {
        const nextState =
          valueOrSetValue instanceof Function ? valueOrSetValue(prevState) : valueOrSetValue;

        if (localStoreInstance) {
          if (nextState === undefined) {
            localStoreInstance.removeItem(key);
          } else {
            localStoreInstance.setItem(key, nextState);
          }
        }

        return nextState;
      });
    },
    [localStoreInstance, key],
  );

  return [state, setLocalStoreState];
};
