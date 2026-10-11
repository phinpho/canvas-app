"use client";

import { cn } from "cn";
import { type ComponentProps, type FC, useCallback } from "react";
import { useNavigate } from "react-router";
import type { AuthUserProps } from "../../../contexts/AuthContext.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { Avatar } from "../../ui/Avatar/Avatar.js";
import { AvatarFallback } from "../../ui/Avatar/AvatarFallback.js";
import { AvatarImage } from "../../ui/Avatar/AvatarImage.js";
import { Button } from "../../ui/Button/Button.js";
import { Item } from "../../ui/Item/Item.js";
import { ItemContent } from "../../ui/Item/ItemContent.js";
import { ItemDescription } from "../../ui/Item/ItemDescription.js";
import { ItemMedia } from "../../ui/Item/ItemMedia.js";
import { ItemTitle } from "../../ui/Item/ItemTitle.js";

export type SignInUserProps = Omit<
  ComponentProps<typeof Button>,
  "render" | "children" | "onClick" | "onClickCapture"
> & {
  user: AuthUserProps;
};

export const SignInUser: FC<SignInUserProps> = ({
  user,
  className,
  variant = "outline",
  ...props
}) => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    signIn(user);
    navigate("/", { replace: true });
  }, [signIn, user, navigate]);

  return (
    <Button
      {...props}
      className={cn("h-auto", className)}
      nativeButton={false}
      onClick={onClickHandler}
      render={<Item variant="outline" />}
      variant={variant}
    >
      <ItemMedia variant="image">
        <Avatar>
          <AvatarImage alt={user.name} src={user.avatarUrl} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{user.name}</ItemTitle>
        <ItemDescription>@{user.username}</ItemDescription>
      </ItemContent>
    </Button>
  );
};
