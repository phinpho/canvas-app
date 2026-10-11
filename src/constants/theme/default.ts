import type { ThemeContextTheme } from "../../contexts/ThemeContext.js";

export const THEME_DEFAULT: ThemeContextTheme = {
  id: "default",
  name: "Default",
  spec: {
    accent: { dark: "oklch(0.3710 0 0)", light: "oklch(0.9700 0 0)" },
    accentForeground: { dark: "oklch(0.9850 0 0)", light: "oklch(0.2050 0 0)" },
    background: { dark: "oklch(0.1450 0 0)", light: "oklch(1 0 0)" },
    border: { dark: "oklch(0.2750 0 0)", light: "oklch(0.9220 0 0)" },
    card: { dark: "oklch(0.2050 0 0)", light: "oklch(1 0 0)" },
    cardForeground: { dark: "oklch(0.9850 0 0)", light: "oklch(0.1450 0 0)" },
    chart1: {
      dark: "oklch(0.8100 0.1000 252)",
      light: "oklch(0.8100 0.1000 252)",
    },
    chart2: {
      dark: "oklch(0.6200 0.1900 260)",
      light: "oklch(0.6200 0.1900 260)",
    },
    chart3: {
      dark: "oklch(0.5500 0.2200 263)",
      light: "oklch(0.5500 0.2200 263)",
    },
    chart4: {
      dark: "oklch(0.4900 0.2200 264)",
      light: "oklch(0.4900 0.2200 264)",
    },
    chart5: {
      dark: "oklch(0.4200 0.1800 266)",
      light: "oklch(0.4200 0.1800 266)",
    },
    destructive: {
      dark: "oklch(0.7040 0.1910 22.2160)",
      light: "oklch(0.5770 0.2450 27.3250)",
    },
    destructiveForeground: { dark: "oklch(0.9850 0 0)", light: "oklch(1 0 0)" },
    fontMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSans:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSerif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    foreground: { dark: "oklch(0.9850 0 0)", light: "oklch(0.1450 0 0)" },
    input: { dark: "oklch(0.3250 0 0)", light: "oklch(0.9220 0 0)" },
    muted: { dark: "oklch(0.2690 0 0)", light: "oklch(0.9700 0 0)" },
    mutedForeground: { dark: "oklch(0.7080 0 0)", light: "oklch(0.5560 0 0)" },
    popover: { dark: "oklch(0.2690 0 0)", light: "oklch(1 0 0)" },
    popoverForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.1450 0 0)",
    },
    primary: { dark: "oklch(0.9220 0 0)", light: "oklch(0.2050 0 0)" },
    primaryForeground: {
      dark: "oklch(0.2050 0 0)",
      light: "oklch(0.9850 0 0)",
    },
    radius: "0.625rem",
    ring: { dark: "oklch(0.5560 0 0)", light: "oklch(0.7080 0 0)" },
    secondary: { dark: "oklch(0.2690 0 0)", light: "oklch(0.9700 0 0)" },
    secondaryForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.2050 0 0)",
    },
    shadow: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
    shadow2Xl: "0 1px 3px 0px hsl(0 0% 0% / 0.25)",
    shadow2Xs: "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
    shadowBlur: "3px",
    shadowColor: "oklch(0 0 0)",
    shadowLg: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
    shadowMd: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
    shadowOpacity: "0.1",
    shadowSm: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
    shadowSpread: "0px",
    shadowX: "0",
    shadowXl: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
    shadowXs: "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
    shadowY: "1px",
    sidebar: { dark: "oklch(0.2050 0 0)", light: "oklch(0.9850 0 0)" },
    sidebarAccent: { dark: "oklch(0.2690 0 0)", light: "oklch(0.9700 0 0)" },
    sidebarAccentForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.2050 0 0)",
    },
    sidebarBorder: { dark: "oklch(0.2750 0 0)", light: "oklch(0.9220 0 0)" },
    sidebarForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.1450 0 0)",
    },
    sidebarPrimary: {
      dark: "oklch(0.4880 0.2430 264.3760)",
      light: "oklch(0.2050 0 0)",
    },
    sidebarPrimaryForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.9850 0 0)",
    },
    sidebarRing: { dark: "oklch(0.4390 0 0)", light: "oklch(0.7080 0 0)" },
    spacing: "0.25rem",
    statusbar: { dark: "oklch(0.2050 0 0)", light: "oklch(0.9850 0 0)" },
    statusbarAccent: { dark: "oklch(0.2690 0 0)", light: "oklch(0.9700 0 0)" },
    statusbarAccentForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.2050 0 0)",
    },
    statusbarBorder: { dark: "oklch(0.2750 0 0)", light: "oklch(0.9220 0 0)" },
    statusbarForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.1450 0 0)",
    },
    statusbarPrimary: {
      dark: "oklch(0.4880 0.2430 264.3760)",
      light: "oklch(0.2050 0 0)",
    },
    statusbarPrimaryForeground: {
      dark: "oklch(0.9850 0 0)",
      light: "oklch(0.9850 0 0)",
    },
    statusbarRing: { dark: "oklch(0.4390 0 0)", light: "oklch(0.7080 0 0)" },
    trackingNormal: "0em",
  },
} as const;
