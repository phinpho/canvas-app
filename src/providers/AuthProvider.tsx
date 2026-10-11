"use client";

import {
  type FC,
  type PropsWithChildren,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { USERS } from "../constants/users.js";
import {
  AuthContext,
  type AuthStatus,
  type AuthUserProps,
  type SignInParameters,
} from "../contexts/AuthContext.js";
import { useLocalStoreState } from "../hooks/useLocalStoreState.js";
import type { LocalStoreInstance } from "../instances/LocalStoreInstance.js";

export type AuthProviderProps = PropsWithChildren<{
  localStoreRef?: RefObject<LocalStoreInstance | undefined>;
  localStoreKeyPrefix?: string | readonly string[];
}>;

export const AuthProvider: FC<AuthProviderProps> = ({
  children,
  localStoreRef,
  localStoreKeyPrefix = ["auth"],
}) => {
  const [authenticated, setAuthenticated] = useLocalStoreState<string | false>(
    localStoreRef,
    [...localStoreKeyPrefix, "authenticated"],
    false,
  );

  const user: AuthUserProps | undefined = useMemo(() => {
    if (typeof authenticated !== "string") return undefined;
    return USERS.find((u) => u.username === authenticated);
  }, [authenticated]);

  const signIn = useCallback(
    ({ username }: SignInParameters) => {
      if (authenticated !== false) {
        return;
      }
      if (USERS.findIndex((u) => u.username === username) >= 0) {
        setAuthenticated(username);
      } else {
        throw new Error(`User with username "${username}" not found.`);
      }
    },
    [authenticated, setAuthenticated],
  );

  const signOut = useCallback(() => {
    setAuthenticated(false);
  }, [setAuthenticated]);

  const status: AuthStatus = useMemo(
    () =>
      authenticated === undefined ? "loading" : authenticated === false ? "signedOut" : "signedIn",
    [authenticated],
  );

  const getUser = useCallback((username: string): Promise<AuthUserProps | undefined> => {
    return new Promise((resolve) => {
      const result = USERS.find((u) => u.username === username);
      if (result) {
        resolve(result);
      } else {
        resolve(undefined);
      }
    });
  }, []);

  useEffect(() => {
    if (authenticated === undefined) {
      setAuthenticated(false);
    }
  }, [authenticated, setAuthenticated]);

  return (
    <AuthContext
      value={{
        getUser,
        signIn,
        signOut,
        status,
        user,
      }}
    >
      {children}
    </AuthContext>
  );
};

AuthProvider.displayName = "AuthProvider";
