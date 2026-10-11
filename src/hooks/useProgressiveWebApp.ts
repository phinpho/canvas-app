import { use } from "react";
import {
  ProgressiveWebAppContext,
  type ProgressiveWebAppContextProps,
} from "../contexts/ProgressiveWebAppContext.js";

export type UseProgressiveWebAppHook = () => ProgressiveWebAppContextProps;

export const useProgressiveWebApp: UseProgressiveWebAppHook = () => {
  const progrssiveWebAppContext = use(ProgressiveWebAppContext);

  if (!progrssiveWebAppContext) {
    throw new Error("useProgressiveWebApp must be used within a <ProgressiveWebAppProvider>");
  }

  return progrssiveWebAppContext;
};
