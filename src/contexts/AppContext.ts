import {
  type Context,
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import type { LocalStoreInstance } from "../instances/LocalStoreInstance.js";

export type AppContextProps = {
  id: string;
  localStoreRef?: RefObject<LocalStoreInstance | undefined>;
  title?: string;
  setTitle: Dispatch<SetStateAction<string | undefined>>;
  subTitle?: string;
  setSubTitle: Dispatch<SetStateAction<string | undefined>>;
  description?: string;
  setDescription: Dispatch<SetStateAction<string | undefined>>;
  workerRef?: RefObject<Worker | undefined>;
};

export const AppContext: Context<AppContextProps | undefined> = createContext<
  AppContextProps | undefined
>(undefined);
