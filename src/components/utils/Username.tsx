"use client";

import { type ComponentProps, type FC, Suspense } from "react";
import { useUser } from "../../hooks/useUser.js";
import { UserHoverCard } from "./UserHoverCard.js";

export type UsernameProps = ComponentProps<"span"> & {
  username: string;
  hoverCard?: boolean;
};

export const Username: FC<UsernameProps> = ({ username, hoverCard = false, ...props }) => {
  const [user] = useUser(username);

  return (
    <Suspense fallback={<span {...props}>@${username}</span>}>
      {hoverCard ? (
        <UserHoverCard render={<span {...props} />} username={username}>
          @{user?.username ?? username}
        </UserHoverCard>
      ) : (
        <span {...props}>@{user?.username ?? username}</span>
      )}
    </Suspense>
  );
};

Username.displayName = "Username";
