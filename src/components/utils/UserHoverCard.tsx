"use client";

import type { ComponentProps, FC } from "react";
import { useUser } from "../../hooks/useUser.js";
import { HoverCard } from "../ui/HoverCard/HoverCard.js";
import { HoverCardContent } from "../ui/HoverCard/HoverCardContent.js";
import { HoverCardTrigger } from "../ui/HoverCard/HoverCardTrigger.js";
import { Item } from "../ui/Item/Item.js";
import { ItemContent } from "../ui/Item/ItemContent.js";
import { ItemDescription } from "../ui/Item/ItemDescription.js";
import { ItemMedia } from "../ui/Item/ItemMedia.js";
import { ItemTitle } from "../ui/Item/ItemTitle.js";
import { UserAvatar } from "./UserAvatar.js";

export type UserHoverCardProps = Omit<ComponentProps<typeof HoverCardTrigger>, "name"> & {
  username: string;
};

export const UserHoverCard: FC<UserHoverCardProps> = ({ username, ...props }) => {
  const [user] = useUser(username);

  return (
    <HoverCard>
      <HoverCardTrigger {...props} />
      <HoverCardContent>
        <Item>
          <ItemMedia variant="image">
            <UserAvatar username={user?.username ?? username} />
          </ItemMedia>
          <ItemContent>
            {!user?.name ? (
              <ItemTitle>@{username}</ItemTitle>
            ) : (
              <>
                <ItemTitle>{user.name}</ItemTitle>
                <ItemDescription>@{user.username ?? username}</ItemDescription>
              </>
            )}
          </ItemContent>
        </Item>
      </HoverCardContent>
    </HoverCard>
  );
};
