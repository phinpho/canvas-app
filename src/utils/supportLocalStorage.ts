import { LOCAL_STORAGE_METHODS } from "../constants/localStorageMethods.js";

/**
 * Check the availability of localStorage in the current environment
 *
 * @remarks
 * This function checks if the localStorage API is available and functional
 * in the current environment (e.g., browser). It verifies the existence
 * of the localStorage object and its essential methods.
 *
 * @returns true if localStorage is supported, false otherwise.
 */
export const supportLocalStorage = (): boolean => {
  if (!globalThis) return false;
  if (typeof globalThis !== "object") return false;
  if (!("localStorage" in globalThis)) return false;
  if (!globalThis.localStorage) return false;
  if (typeof globalThis.localStorage !== "object") return false;

  for (const method of LOCAL_STORAGE_METHODS) {
    if (!(method in globalThis.localStorage)) return false;
    if (!globalThis.localStorage[method]) return false;
    if (typeof globalThis.localStorage[method] !== "function") return false;
  }
  if (!("length" in globalThis.localStorage)) return false;
  if (typeof globalThis.localStorage.length !== "number") return false;
  return true;
};
