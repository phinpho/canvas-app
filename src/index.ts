import { createElement, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app/App.js";
import { THEME_DEFAULT } from "./constants/theme/default.js";
import { LocalStoreInstance } from "./instances/LocalStoreInstance.js";
import { AppProvider } from "./providers/AppProvider.js";
import { createToastManager } from "./utils/createToastManager.js";
import MainWorker from "./workers/index.js?worker";

const rootElement = document.body as HTMLBodyElement;
const root = createRoot(rootElement);

const appID = __APP_ID__ ?? "canvas-app";

const localStore = new LocalStoreInstance(
  [appID, __APP_VERSION__ ?? "unknown"],
  "::",
  Boolean(__APP_VERSION__ && __APP_VERSION__ !== "development"),
);

const themes = [THEME_DEFAULT] as const;

const toastManager = createToastManager();

const worker = new MainWorker();

root.render(
  createElement(
    Fragment,
    null,
    createElement(
      AppProvider,
      {
        defaultCurrentThemeId: {
          dark: THEME_DEFAULT.id,
          light: THEME_DEFAULT.id,
        },
        defaultDescription: __APP_DESCRIPTION__ ?? "Infinite canvas with advanced 3D capabilities",
        defaultMode: "system",
        defaultTitle: __APP_NAME__ ?? "Canvas App",
        id: appID,
        localStore,
        themes,
        toastManager,
        worker,
      },
      createElement(App),
    ),
  ),
);
