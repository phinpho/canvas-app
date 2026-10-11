import { use, useCallback } from "react";
import {
  ThemeContext,
  type ThemeContextMode,
  type ThemeContextProps,
  type ThemeContextSpecKey,
} from "../contexts/ThemeContext.js";

export type UseThemeHook = () => ThemeContextProps & {
  getCurrentThemeProperty: (property: ThemeContextSpecKey) => {
    [Mode in ThemeContextMode]?: string;
  };
};

export const useTheme: UseThemeHook = () => {
  const themeContext = use(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }

  const { themes, currentThemeId, setCurrentThemeId } = themeContext;

  const getCurrentThemeProperty = useCallback(
    (property: ThemeContextSpecKey): { [Mode in ThemeContextMode]?: string } => {
      if (currentThemeId) {
        const lightThemeSpecValue = themes.find((theme) => theme.id === currentThemeId.light)
          ?.spec?.[property];
        const darkThemeSpecValue = themes.find((theme) => theme.id === currentThemeId.dark)?.spec?.[
          property
        ];

        return {
          dark: darkThemeSpecValue
            ? typeof darkThemeSpecValue === "string"
              ? darkThemeSpecValue
              : "dark" in darkThemeSpecValue && typeof darkThemeSpecValue.dark === "string"
                ? darkThemeSpecValue.dark
                : "default" in darkThemeSpecValue && typeof darkThemeSpecValue.default === "string"
                  ? darkThemeSpecValue.default
                  : undefined
            : undefined,
          light: lightThemeSpecValue
            ? typeof lightThemeSpecValue === "string"
              ? lightThemeSpecValue
              : "light" in lightThemeSpecValue && typeof lightThemeSpecValue.light === "string"
                ? lightThemeSpecValue.light
                : "default" in lightThemeSpecValue &&
                    typeof lightThemeSpecValue.default === "string"
                  ? lightThemeSpecValue.default
                  : undefined
            : undefined,
        };
      }

      return {
        dark: undefined,
        light: undefined,
      };
    },
    [currentThemeId, themes],
  );

  return {
    ...themeContext,
    currentThemeId,
    getCurrentThemeProperty,
    setCurrentThemeId,
    themes,
  };
};
