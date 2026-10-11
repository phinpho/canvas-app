"use client";

import {
  type ComponentProps,
  type FC,
  type PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import { Toaster } from "../components/ui/Toaster/Toaster.js";
import { AppContext } from "../contexts/AppContext.js";
import type {
  ThemeContextCurrentThemeId,
  ThemeContextExtendedMode,
  ThemeContextTheme,
} from "../contexts/ThemeContext.js";
import { useCurrentId } from "../hooks/useCurrentId.js";
import type { LocalStoreInstance } from "../instances/LocalStoreInstance.js";
import { AuthProvider } from "./AuthProvider.js";
import { ProgressiveWebAppProvider } from "./ProgressiveWebAppProvider.js";
import { ThemeProvider } from "./ThemeProvider.js";
import { TooltipProvider } from "./TooltipProvider.js";

export type AppProviderProps = PropsWithChildren<{
  id?: string;
  localStore?: LocalStoreInstance;
  themes?: readonly ThemeContextTheme[] | ThemeContextTheme[];
  defaultCurrentThemeId?: ThemeContextCurrentThemeId;
  defaultMode?: ThemeContextExtendedMode;
  defaultTitle?: string;
  defaultSubTitle?: string;
  defaultDescription?: string;
  toastManager: ComponentProps<typeof Toaster>["toastManager"];
  tooltipDelay?: number;
  worker?: Worker;
}>;

export const AppProvider: FC<AppProviderProps> = ({
  id,
  localStore,
  defaultCurrentThemeId,
  defaultMode = "system",
  themes,
  children,
  defaultTitle,
  defaultSubTitle,
  defaultDescription,
  toastManager,
  tooltipDelay = 0,
  worker,
}) => {
  const currentId = useCurrentId(id);
  const workerRef = useRef<Worker | undefined>(worker);

  const localStoreRef = useRef<LocalStoreInstance>(localStore);

  const [titleState, setTitleState] = useState<string | undefined>(defaultTitle);
  const [subTitleState, setSubTitleState] = useState<string | undefined>(defaultSubTitle);
  const [descriptionState, setDescriptionState] = useState<string | undefined>(defaultDescription);

  const setTitle = useCallback(
    (value: string | undefined | ((previousValue: string | undefined) => string | undefined)) => {
      const newValue = typeof value === "function" ? value(titleState) : value;
      setTitleState(newValue);
      if (globalThis && globalThis instanceof Window) {
        if (subTitleState) {
          globalThis.document.title = subTitleState;
        } else {
          globalThis.document.title = newValue ?? "";
        }
      }
    },
    [titleState, subTitleState],
  );

  const setSubTitle = useCallback(
    (value: string | undefined | ((previousValue: string | undefined) => string | undefined)) => {
      const newValue = typeof value === "function" ? value(subTitleState) : value;
      setSubTitleState(newValue);
      if (globalThis && globalThis instanceof Window) {
        if (newValue) {
          globalThis.document.title = newValue;
        } else {
          globalThis.document.title = titleState ?? "";
        }
      }
    },
    [titleState, subTitleState],
  );

  const setDescription = useCallback(
    (value: string | undefined | ((previousValue: string | undefined) => string | undefined)) => {
      const newValue = typeof value === "function" ? value(descriptionState) : value;
      setDescriptionState(newValue);
    },
    [descriptionState],
  );

  return (
    <ProgressiveWebAppProvider>
      <TooltipProvider delay={tooltipDelay}>
        <AppContext
          value={{
            description: descriptionState,
            id: currentId,
            localStoreRef,
            setDescription,
            setSubTitle,
            setTitle,
            subTitle: subTitleState,
            title: titleState,
            workerRef,
          }}
        >
          <ThemeProvider
            defaultCurrentThemeId={defaultCurrentThemeId}
            defaultMode={defaultMode}
            localStoreRef={localStoreRef}
            themes={themes}
          >
            <Toaster toastManager={toastManager}>
              <AuthProvider localStoreRef={localStoreRef}>{children}</AuthProvider>
            </Toaster>
          </ThemeProvider>
        </AppContext>
      </TooltipProvider>
    </ProgressiveWebAppProvider>
  );
};

AppProvider.displayName = "AppProvider";
