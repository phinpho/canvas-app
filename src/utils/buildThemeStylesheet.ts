import { THEME_CSS_VARIABLES } from "../constants/theme/index.js";
import type { ThemeContextSpecKey, ThemeContextTheme } from "../contexts/ThemeContext.js";

export const buildThemeStylesheet = ({ id, spec }: ThemeContextTheme): string => {
  const cssLightSelector = `[data-theme-light-id="${id}"].light`;
  const cssDarkSelector = `[data-theme-dark-id="${id}"].dark`;

  const cssLightProperties = [];
  const cssDarkProperties = [];

  for (const [key, value] of Object.entries(spec)) {
    const specKey = key as ThemeContextSpecKey;
    const cssVariableName = THEME_CSS_VARIABLES[specKey];
    const lightValue =
      typeof value === "string"
        ? value
        : "light" in value && typeof value.light === "string"
          ? value.light
          : "default" in value && typeof value.default === "string"
            ? value.default
            : undefined;
    const darkValue =
      typeof value === "string"
        ? value
        : "dark" in value && typeof value.dark === "string"
          ? value.dark
          : "default" in value && typeof value.default === "string"
            ? value.default
            : undefined;

    if (lightValue) {
      cssLightProperties.push(`${cssVariableName}: ${lightValue};`);
    }
    if (darkValue) {
      cssDarkProperties.push(`${cssVariableName}: ${darkValue};`);
    }
  }

  return [
    `${cssLightSelector} {\n  ${cssLightProperties.join("\n  ")}\n}`,
    `${cssDarkSelector} {\n  ${cssDarkProperties.join("\n  ")}\n}`,
  ].join("\n");
};
