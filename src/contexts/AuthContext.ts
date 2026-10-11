import { type Context, createContext } from "react";

export type AuthStatus = "loading" | "signedIn" | "signedOut";

export type SignInParameters = {
  username: string;
};

export type AuthUserProps = {
  username: string;
  name?: string;
  email?: string;
  avatarUrl?: string;
};

export type AuthContextProps = {
  status: AuthStatus;
  signIn: (params: SignInParameters) => void;
  signOut: () => void;
  user?: AuthUserProps | undefined;
  getUser: (username: string) => Promise<AuthUserProps | undefined>;
};

export const AuthContext: Context<AuthContextProps | undefined> = createContext<
  AuthContextProps | undefined
>(undefined);
