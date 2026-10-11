"use client";

import { InfoIcon, XIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { NavLink } from "react-router";
import type { CanvasDocumentFields } from "../../../resources/database/CanvasDocument.js";
import { Button } from "../../ui/Button/Button.js";
import { Card } from "../../ui/Card/Card.js";
import { CardContent } from "../../ui/Card/CardContent.js";
import { CardFooter } from "../../ui/Card/CardFooter.js";
import { CardHeader } from "../../ui/Card/CardHeader.js";
import { CardTitle } from "../../ui/Card/CardTitle.js";
import { Drawer } from "../../ui/Drawer/Drawer.js";
import { DrawerClose } from "../../ui/Drawer/DrawerClose.js";
import { DrawerContent } from "../../ui/Drawer/DrawerContent.js";
import { DrawerDescription } from "../../ui/Drawer/DrawerDescription.js";
import { DrawerFooter } from "../../ui/Drawer/DrawerFooter.js";
import { DrawerHeader } from "../../ui/Drawer/DrawerHeader.js";
import { DrawerTitle } from "../../ui/Drawer/DrawerTitle.js";
import { DrawerTrigger } from "../../ui/Drawer/DrawerTrigger.js";
import { UserAvatar } from "../../utils/UserAvatar.js";
import { UserHoverCard } from "../../utils/UserHoverCard.js";
import { CanvasDocumentInfo } from "./CanvasDocumentInfo.js";

export type CanvasDocumentListItemProps = Omit<ComponentProps<typeof Card>, "children"> & {
  canvasDocument: CanvasDocumentFields;
};

export const CanvasDocumentListItem: FC<CanvasDocumentListItemProps> = ({
  canvasDocument,
  ...props
}) => {
  return (
    <Card {...props}>
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle>{canvasDocument.name}</CardTitle>
        <UserHoverCard
          render={<UserAvatar username={canvasDocument.user} />}
          username={canvasDocument.user}
        />
      </CardHeader>
      <CardContent>
        <p>{canvasDocument.description}</p>
      </CardContent>
      <CardFooter className="mt-auto flex flex-row items-center justify-end gap-2">
        <Drawer swipeDirection="right">
          <DrawerTrigger render={<Button className="mr-auto" size="icon" variant="ghost" />}>
            <InfoIcon />
            <span className="sr-only">More details</span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-row items-center justify-stretch w-full">
              <div className="flex flex-col gap-1">
                <DrawerTitle>{canvasDocument.name}</DrawerTitle>
                <DrawerDescription>{canvasDocument.description}</DrawerDescription>
              </div>
              <DrawerClose className="ml-auto" render={<Button size="icon-sm" variant="ghost" />}>
                <XIcon />
                <span className="sr-only">Close</span>
              </DrawerClose>
            </DrawerHeader>
            <CanvasDocumentInfo canvasDocument={canvasDocument} />
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Button
          nativeButton={false}
          render={<NavLink end to={`/document/${canvasDocument.id}/`} viewTransition />}
        >
          Open
        </Button>
      </CardFooter>
    </Card>
  );
};

CanvasDocumentListItem.displayName = "CanvasDocumentListItem";
