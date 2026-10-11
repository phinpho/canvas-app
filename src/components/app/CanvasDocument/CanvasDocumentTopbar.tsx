"use client";

import { cn } from "cn";
import {
  BoxIcon,
  MenuIcon,
  MessagesSquareIcon,
  SquarePlusIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { type ComponentProps, type FC, useCallback } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../ui/Button/Button.js";
import { ButtonGroup } from "../../ui/ButtonGroup/ButtonGroup.js";
import { ButtonGroupSeparator } from "../../ui/ButtonGroup/ButtonGroupSeparator.js";
import { DropdownMenu } from "../../ui/DropdownMenu/DropdownMenu.js";
import { DropdownMenuContent } from "../../ui/DropdownMenu/DropdownMenuContent.js";
import { DropdownMenuItem } from "../../ui/DropdownMenu/DropdownMenuItem.js";
import { DropdownMenuSeparator } from "../../ui/DropdownMenu/DropdownMenuSeparator.js";
import { DropdownMenuTrigger } from "../../ui/DropdownMenu/DropdownMenuTrigger.js";
import { NavBarUserMenu } from "../NavBar/NavBarUserMenu.js";
import { Topbar } from "../Topbar/Topbar.js";
import { CanvasDocumentCommentsDrawer } from "./CanvasDocumentCommentsDrawer.js";

export type CanvasDocumentTopbarProps = Omit<ComponentProps<typeof Topbar>, "children"> & {
  canvasDocumentName?: string;
  canvasDocumentId: string;
};

export const CanvasDocumentTopbar: FC<CanvasDocumentTopbarProps> = ({
  className,
  canvasDocumentName = "Loading...",
  canvasDocumentId,
  ...props
}) => {
  const navigate = useNavigate();

  const onCloseDocumentClickHandler = useCallback(() => {
    navigate("/document", {
      replace: true,
      viewTransition: true,
    });
  }, [navigate]);

  return (
    <>
      <Topbar {...props} className={cn("left-1 h-12", className)}>
        <div className="flex flex-row items-center gap-2 font-bold p-2">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button size="icon-sm" variant="ghost" />}>
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Delete document
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onCloseDocumentClickHandler}>
                <XIcon />
                Close document
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {canvasDocumentName}
        </div>
      </Topbar>
      <Topbar {...props} className={cn("right-1 h-12 px-1", className)}>
        <div className="flex flex-row h-full items-center justify-center">
          <ButtonGroup>
            <Button size="icon-lg" variant="ghost">
              <SquarePlusIcon />
              <span className="sr-only">New card</span>
            </Button>
            <Button size="icon-lg" variant="ghost">
              <BoxIcon />
              <span className="sr-only">New 3D scene</span>
            </Button>
            <ButtonGroupSeparator />
            {Boolean(canvasDocumentId) && (
              <CanvasDocumentCommentsDrawer
                documentId={canvasDocumentId}
                size="icon-lg"
                variant="ghost"
              >
                <MessagesSquareIcon />
                <span className="sr-only">Comments</span>
              </CanvasDocumentCommentsDrawer>
            )}
            <ButtonGroupSeparator />
            <NavBarUserMenu />
          </ButtonGroup>
        </div>
      </Topbar>
    </>
  );
};

CanvasDocumentTopbar.displayName = "CanvasDocumentTopbar";
