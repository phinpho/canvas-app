import { useEffect, useMemo, useState, useTransition } from "react";
import type { AuthUserProps } from "../contexts/AuthContext.js";
import { useAuth } from "./useAuth.js";

export const useUser = (username?: string | undefined): [AuthUserProps | undefined, boolean] => {
  const { getUser } = useAuth();
  const [isPending, startTransition] = useTransition();
  const [userState, setUserState] = useState<AuthUserProps | undefined>(undefined);

  useEffect(() => {
    if (username !== undefined) {
      startTransition(async () => {
        const user = await getUser(username);
        startTransition(() => {
          setUserState(user);
        });
      });
    } else {
      startTransition(() => {
        setUserState(undefined);
      });
    }
  }, [username, getUser]);

  return useMemo(() => [userState ?? undefined, isPending], [userState, isPending]);
};
