"use client";

import { type ComponentProps, type FC, Suspense, useMemo } from "react";
import { useUser } from "../../hooks/useUser.js";
import { Avatar } from "../ui/Avatar/Avatar.js";
import { AvatarFallback } from "../ui/Avatar/AvatarFallback.js";
import { AvatarImage } from "../ui/Avatar/AvatarImage.js";

export type UserAvatarProps = ComponentProps<typeof Avatar> & {
  username: string;
};

export const UserAvatar: FC<UserAvatarProps> = ({ username, ...props }) => {
  const [user] = useUser(username);

  const avatarFallbackLabel = useMemo(() => {
    if (!username) return "";

    const name = user?.name ?? username;

    const words = name
      .trim()
      .split(" ")
      .filter((word) => Boolean(word.trim()));

    if (words.length < 2) {
      return words[0].slice(0, 2).toUpperCase();
    }

    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    return firstWord[0].toUpperCase() + lastWord.toUpperCase();
  }, [username, user]);

  return (
    <Avatar {...props}>
      <Suspense fallback={<AvatarFallback>{avatarFallbackLabel}</AvatarFallback>}>
        <AvatarImage alt={user?.name ?? username} src={user?.avatarUrl} />
        <AvatarFallback>{avatarFallbackLabel}</AvatarFallback>
      </Suspense>
    </Avatar>
  );
};

UserAvatar.displayName = "UserAvatar";
