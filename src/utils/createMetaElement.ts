export type ThemeColorMeta = {
  media?: "(prefers-color-scheme: light)" | "(prefers-color-scheme: dark)";
  content: string;
};

export const createMetaElement = (
  name: string,
  attributes: Record<string, string>,
): HTMLMetaElement => {
  const meta = document.createElement("meta");
  meta.setAttribute("name", name);
  for (const [key, value] of Object.entries(attributes)) {
    meta.setAttribute(key, value);
  }
  return meta;
};
