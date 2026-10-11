"use client";

import { DoorClosedIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { useAuth } from "../../../hooks/useAuth.js";
import { Button } from "../../ui/Button/Button.js";
import { DropdownMenu } from "../../ui/DropdownMenu/DropdownMenu.js";
import { DropdownMenuContent } from "../../ui/DropdownMenu/DropdownMenuContent.js";
import { DropdownMenuGroup } from "../../ui/DropdownMenu/DropdownMenuGroup.js";
import { DropdownMenuItem } from "../../ui/DropdownMenu/DropdownMenuItem.js";
import { DropdownMenuSeparator } from "../../ui/DropdownMenu/DropdownMenuSeparator.js";
import { DropdownMenuTrigger } from "../../ui/DropdownMenu/DropdownMenuTrigger.js";
import { UserAvatar } from "../../utils/UserAvatar.js";

export type NavBarUserMenuProps = Omit<ComponentProps<typeof Button>, "children">;

export const NavBarUserMenu: FC<NavBarUserMenuProps> = ({
  size = "icon-lg",
  variant = "link",
  ...props
}) => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button {...props} size={size} variant={variant} />}>
        <UserAvatar username={user.username} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserAvatar username={user.username} />
            <div className="flex flex-col">
              <span className="font-semibold">{user.name}</span>
              <span className="text-sm text-muted-foreground">@{user.username}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} variant="destructive">
          <DoorClosedIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

NavBarUserMenu.displayName = "NavBarUserMenu";
