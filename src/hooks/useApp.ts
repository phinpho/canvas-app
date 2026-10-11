import { use } from "react";
import { AppContext, type AppContextProps } from "../contexts/AppContext.js";

export type UseAppHook = () => AppContextProps;

export const useApp: UseAppHook = () => {
  const appContext = use(AppContext);

  if (!appContext) {
    throw new Error("useApp must be used within an <AppProvider>");
  }

  return appContext;
};
