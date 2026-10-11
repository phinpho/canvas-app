"use client";

import { BoxIcon, MessageSquarePlusIcon, SquarePlusIcon } from "lucide-react";
import type { ComponentPropsWithoutRef, FC } from "react";
import { useDocumentContextMenu } from "../../../hooks/useDocumentContextMenu.js";
import { Card } from "../../ui/Card/Card.js";
import { CardContent } from "../../ui/Card/CardContent.js";
import { Separator } from "../../ui/Separator/Separator.js";
import { DocumentContextMenuAdd3DScene } from "./DocumentContextMenuAdd3DScene.js";
import { DocumentContextMenuAddCard } from "./DocumentContextMenuAddCard.js";
import { DocumentContextMenuAddComment } from "./DocumentContextMenuAddComment.js";

export type DocumentContextMenuProps = Omit<ComponentPropsWithoutRef<typeof Card>, "children">;

export const DocumentContextMenu: FC<DocumentContextMenuProps> = ({ ...props }) => {
  const { visible, contextMenuRef, clientPosition } = useDocumentContextMenu();

  return (
    <Card
      {...props}
      aria-hidden={!visible}
      className="p-0 w-48 rounded-sm"
      hidden={!visible}
      popover="manual"
      ref={contextMenuRef}
      style={{
        left: `${clientPosition.x}px`,
        top: `${clientPosition.y}px`,
      }}
    >
      <CardContent className="p-0">
        <DocumentContextMenuAddCard>
          <SquarePlusIcon />
          New card
        </DocumentContextMenuAddCard>
        <DocumentContextMenuAdd3DScene>
          <BoxIcon />
          New 3D scene
        </DocumentContextMenuAdd3DScene>
        <Separator />
        <DocumentContextMenuAddComment>
          <MessageSquarePlusIcon />
          Add comment
        </DocumentContextMenuAddComment>
      </CardContent>
    </Card>
  );
};

DocumentContextMenu.displayName = "DocumentContextMenu";
