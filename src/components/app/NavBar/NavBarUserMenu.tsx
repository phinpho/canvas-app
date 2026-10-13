"use client";

import { DoorClosedIcon, LogInIcon, MoonIcon, SunIcon, SunMoonIcon, User2Icon } from "lucide-react";
import { type ComponentProps, type FC, useCallback } from "react";
import { NavLink } from "react-router";
import type { ThemeContextExtendedMode } from "../../../contexts/ThemeContext.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { useTheme } from "../../../hooks/useTheme.js";
import { Button } from "../../ui/Button/Button.js";
import { DropdownMenu } from "../../ui/DropdownMenu/DropdownMenu.js";
import { DropdownMenuContent } from "../../ui/DropdownMenu/DropdownMenuContent.js";
import { DropdownMenuGroup } from "../../ui/DropdownMenu/DropdownMenuGroup.js";
import { DropdownMenuItem } from "../../ui/DropdownMenu/DropdownMenuItem.js";
import { DropdownMenuLabel } from "../../ui/DropdownMenu/DropdownMenuLabel.js";
import { DropdownMenuRadioGroup } from "../../ui/DropdownMenu/DropdownMenuRadioGroup.js";
import { DropdownMenuRadioItem } from "../../ui/DropdownMenu/DropdownMenuRadioItem.js";
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
  const { mode, setMode } = useTheme();

  const onThemeModeChangeHandler = useCallback(
    (value: unknown) => {
      const newMode = (
        typeof value === "string" && ["light", "dark", "system"].includes(value) ? value : "system"
      ) as ThemeContextExtendedMode;
      setMode(newMode);
    },
    [setMode],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button {...props} size={size} variant={variant} />}>
        {user ? (
          <UserAvatar username={user.username} />
        ) : (
          <span className="rounded-full aspect-square size-8 flex items-center justify-center bg-muted text-muted-foreground">
            <User2Icon />
          </span>
        )}
        <span className="sr-only">User menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {user ? (
          <>
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
          </>
        ) : (
          <DropdownMenuItem
            className="aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground cursor-pointer"
            render={<NavLink to="/login" />}
          >
            <LogInIcon />
            Sign in
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme mode</DropdownMenuLabel>
          <DropdownMenuRadioGroup onValueChange={onThemeModeChangeHandler} value={mode ?? "system"}>
            <DropdownMenuRadioItem closeOnClick value="light">
              <SunIcon />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem closeOnClick value="dark">
              <MoonIcon />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem closeOnClick value="system">
              <SunMoonIcon />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

NavBarUserMenu.displayName = "NavBarUserMenu";
