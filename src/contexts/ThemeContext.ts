import { type Context, createContext, type Dispatch, type SetStateAction } from "react";

export type ThemeContextSystemMode = "system";

export type ThemeContextMode = "light" | "dark";

export type ThemeContextExtendedMode = ThemeContextMode | ThemeContextSystemMode;

export type ThemeContextSpecKey =
  | "background"
  | "foreground"
  | "card"
  | "cardForeground"
  | "popover"
  | "popoverForeground"
  | "primary"
  | "primaryForeground"
  | "secondary"
  | "secondaryForeground"
  | "muted"
  | "mutedForeground"
  | "accent"
  | "accentForeground"
  | "destructive"
  | "destructiveForeground"
  | "border"
  | "input"
  | "ring"
  | "chart1"
  | "chart2"
  | "chart3"
  | "chart4"
  | "chart5"
  | "sidebar"
  | "sidebarForeground"
  | "sidebarPrimary"
  | "sidebarPrimaryForeground"
  | "sidebarAccent"
  | "sidebarAccentForeground"
  | "sidebarBorder"
  | "sidebarRing"
  | "fontSans"
  | "fontSerif"
  | "fontMono"
  | "radius"
  | "shadowX"
  | "shadowY"
  | "shadowBlur"
  | "shadowSpread"
  | "shadowOpacity"
  | "shadowColor"
  | "shadow2Xs"
  | "shadowXs"
  | "shadowSm"
  | "shadow"
  | "shadowMd"
  | "shadowLg"
  | "shadowXl"
  | "shadow2Xl"
  | "trackingNormal"
  | "spacing"
  | "statusbar"
  | "statusbarForeground"
  | "statusbarBorder"
  | "statusbarRing"
  | "statusbarPrimary"
  | "statusbarPrimaryForeground"
  | "statusbarAccent"
  | "statusbarAccentForeground";

export type ThemeContextSpecValue =
  | string
  | {
      [Mode in ThemeContextMode | "default"]?: string;
    };

export type ThemeContextSpec = {
  [Key in ThemeContextSpecKey]: ThemeContextSpecValue;
};

export type ThemeContextTheme = {
  id: string;
  name?: string;
  description?: string;
  spec: ThemeContextSpec;
};

export type ThemeContextCurrentThemeId = {
  [Mode in ThemeContextMode]: string;
};

export type ThemeContextProps = {
  currentMode?: ThemeContextMode;
  mode?: ThemeContextExtendedMode;
  setMode: Dispatch<SetStateAction<ThemeContextExtendedMode | undefined>>;
  themes: readonly ThemeContextTheme[];
  currentThemeId?: ThemeContextCurrentThemeId;
  setCurrentThemeId: Dispatch<SetStateAction<string | ThemeContextCurrentThemeId | undefined>>;
};

export const ThemeContext: Context<ThemeContextProps | undefined> = createContext<
  ThemeContextProps | undefined
>(undefined);
