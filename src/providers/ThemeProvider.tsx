"use client";

import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { THEME_DEFAULT } from "../constants/theme/default.js";
import { THEME_CLASS_NAME } from "../constants/theme/index.js";
import {
  ThemeContext,
  type ThemeContextCurrentThemeId,
  type ThemeContextExtendedMode,
  type ThemeContextMode,
  type ThemeContextTheme,
} from "../contexts/ThemeContext.js";
import { useLocalStoreState } from "../hooks/useLocalStoreState.js";
import type { LocalStoreInstance } from "../instances/LocalStoreInstance.js";
import { buildThemeStylesheet } from "../utils/buildThemeStylesheet.js";

export type ThemeProviderProps = PropsWithChildren<{
  localStoreRef?: RefObject<LocalStoreInstance | undefined>;
  localStoreKeyPrefix?: string | readonly string[];
  themes?: readonly ThemeContextTheme[] | ThemeContextTheme[];
  defaultCurrentThemeId?: ThemeContextCurrentThemeId;
  currentThemeId?: ThemeContextCurrentThemeId;
  onCurrentThemeIdChange?: Dispatch<SetStateAction<ThemeContextCurrentThemeId | undefined>>;
  mode?: ThemeContextExtendedMode;
  defaultMode?: ThemeContextExtendedMode;
  onModeChange?: Dispatch<SetStateAction<ThemeContextExtendedMode | undefined>>;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  localStoreRef,
  localStoreKeyPrefix = ["ui", "theme"],
  children,
  themes = [THEME_DEFAULT],
  currentThemeId,
  onCurrentThemeIdChange,
  defaultCurrentThemeId = {
    dark: THEME_DEFAULT.id,
    light: THEME_DEFAULT.id,
  },
  defaultMode = "system",
  mode,
  onModeChange,
}) => {
  const [currentModeState, setCurrentModeState] = useLocalStoreState<ThemeContextMode>(
    localStoreRef,
    [...localStoreKeyPrefix, "currentMode"],
    defaultMode !== "system" ? defaultMode : undefined,
  );
  const [currentThemeIdState, setCurrentThemeIdState] =
    useLocalStoreState<ThemeContextCurrentThemeId>(
      localStoreRef,
      [...localStoreKeyPrefix, "currentThemeId"],
      defaultCurrentThemeId,
    );
  const [modeState, setModeState] = useLocalStoreState<ThemeContextExtendedMode>(
    localStoreRef,
    [...localStoreKeyPrefix, "mode"],
    defaultMode,
  );

  const derivedMode = useMemo(() => {
    return mode ?? modeState;
  }, [mode, modeState]);

  const derivedSetMode = useMemo(() => {
    return onModeChange ?? setModeState;
  }, [onModeChange, setModeState]);

  const derivedCurrentThemeId = useMemo(() => {
    return currentThemeId ?? currentThemeIdState;
  }, [currentThemeId, currentThemeIdState]);

  const derivedSetCurrentThemeId = useMemo(() => {
    return onCurrentThemeIdChange ?? setCurrentThemeIdState;
  }, [onCurrentThemeIdChange, setCurrentThemeIdState]);

  const setCurrentThemeId: Dispatch<
    SetStateAction<string | ThemeContextCurrentThemeId | undefined>
  > = useCallback(
    (
      themeId:
        | string
        | ThemeContextCurrentThemeId
        | undefined
        | ((
            prevThemeId: ThemeContextCurrentThemeId | undefined,
          ) => string | ThemeContextCurrentThemeId | undefined),
    ) => {
      if (typeof themeId === "function") {
        derivedSetCurrentThemeId((prevThemeId) => {
          const newThemeId = themeId(prevThemeId);
          if (typeof newThemeId === "string") {
            return {
              dark: newThemeId,
              light: newThemeId,
            };
          } else {
            return newThemeId;
          }
        });
      } else if (typeof themeId === "string") {
        derivedSetCurrentThemeId({
          dark: themeId,
          light: themeId,
        });
      } else {
        derivedSetCurrentThemeId(themeId);
      }
    },
    [derivedSetCurrentThemeId],
  );

  const matchMediaChangeHandler = useCallback(
    (event: MediaQueryListEvent) => {
      if (event.matches) {
        setCurrentModeState("dark");
      } else {
        setCurrentModeState("light");
      }
    },
    [setCurrentModeState],
  );

  useEffect(() => {
    if ("document" in globalThis && globalThis.document instanceof Document) {
      if (derivedMode === "system") {
        const matchMedia = globalThis.matchMedia("(prefers-color-scheme: dark)");
        setCurrentModeState(matchMedia.matches ? "dark" : "light");
        matchMedia.addEventListener("change", matchMediaChangeHandler);

        return () => {
          matchMedia.removeEventListener("change", matchMediaChangeHandler);
        };
      } else {
        setCurrentModeState(derivedMode);
      }
    }
    return () => {};
  }, [derivedMode, matchMediaChangeHandler, setCurrentModeState]);

  useEffect(() => {
    if ("document" in globalThis && globalThis.document instanceof Document) {
      globalThis.document.documentElement.classList.remove(...Object.values(THEME_CLASS_NAME));
      if (currentModeState === "dark") {
        globalThis.document.documentElement.classList.add(THEME_CLASS_NAME.dark);
      } else if (currentModeState === "light") {
        globalThis.document.documentElement.classList.add(THEME_CLASS_NAME.light);
      }
    }
  }, [currentModeState]);

  useEffect(() => {
    if ("document" in globalThis && globalThis.document instanceof Document) {
      const root = globalThis.document.documentElement;

      for (const index in derivedCurrentThemeId) {
        const mode = index as ThemeContextMode;
        root.setAttribute(`data-theme-${mode}-id`, derivedCurrentThemeId[mode]);
      }

      return () => {
        for (const index in derivedCurrentThemeId) {
          const mode = index as ThemeContextMode;
          root.removeAttribute(`data-theme-${mode}-id`);
        }
      };
    }

    return () => {};
  }, [derivedCurrentThemeId]);

  useEffect(() => {
    if ("document" in globalThis && globalThis.document instanceof Document) {
      const stylesheet = new CSSStyleSheet({
        media: "all",
      });
      stylesheet.replaceSync(themes.map((theme) => buildThemeStylesheet(theme)).join("\n"));
      globalThis.document.adoptedStyleSheets.push(stylesheet);
      return () => {
        globalThis.document.adoptedStyleSheets = globalThis.document.adoptedStyleSheets.filter(
          (sheet) => sheet !== stylesheet,
        );
      };
    }
    return () => {};
  }, [themes]);

  return (
    <ThemeContext
      value={{
        currentMode: currentModeState,
        currentThemeId: derivedCurrentThemeId,
        mode: derivedMode,
        setCurrentThemeId,
        setMode: derivedSetMode,
        themes,
      }}
    >
      {children}
    </ThemeContext>
  );
};

ThemeProvider.displayName = "ThemeProvider";
