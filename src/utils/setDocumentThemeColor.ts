import { createMetaElement, type ThemeColorMeta } from "./createMetaElement.js";

export const setDocumentThemeColor = (
  color: string | { dark?: string; light?: string; default?: string },
): void => {
  if (typeof document === "undefined") {
    return;
  }

  const lightColor = typeof color === "string" ? color : (color.light ?? color.default);
  const darkColor = typeof color === "string" ? color : (color.dark ?? color.default);

  if (!document.querySelector("meta[name=color-scheme]")) {
    const colorSchemeMeta = createMetaElement("color-scheme", {
      content: "dark light",
    });
    document.head.appendChild(colorSchemeMeta);
  }

  const desiredMetas: ThemeColorMeta[] = [];
  if (lightColor && darkColor && lightColor !== darkColor) {
    desiredMetas.push({
      content: lightColor,
      media: "(prefers-color-scheme: light)",
    });
    desiredMetas.push({
      content: darkColor,
      media: "(prefers-color-scheme: dark)",
    });
  } else if (lightColor || darkColor) {
    const singleColor = lightColor ?? darkColor;
    if (singleColor) {
      desiredMetas.push({ content: singleColor });
    }
  }

  for (const meta of document.querySelectorAll("meta[name=theme-color]")) {
    meta.remove();
  }

  for (const { media, content } of desiredMetas) {
    const attributes: Record<string, string> = { content };
    if (media) {
      attributes.media = media;
    }
    const themeColorMeta = createMetaElement("theme-color", attributes);
    document.head.appendChild(themeColorMeta);
  }
};
