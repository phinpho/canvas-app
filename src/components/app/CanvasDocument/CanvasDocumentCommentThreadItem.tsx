"use client";

import type { ComponentProps, FC } from "react";
import type { DocumentCommentThreadFields } from "../../../resources/database/DocumentCommentThread.js";
import { Item } from "../../ui/Item/Item.js";
import { ItemContent } from "../../ui/Item/ItemContent.js";
import { ItemDescription } from "../../ui/Item/ItemDescription.js";
import { ItemHeader } from "../../ui/Item/ItemHeader.js";
import { ItemMedia } from "../../ui/Item/ItemMedia.js";
import { ItemTitle } from "../../ui/Item/ItemTitle.js";
import { UserAvatar } from "../../utils/UserAvatar.js";
import { Username } from "../../utils/Username.js";

export type CanvasDocumentCommentThreadItemProps = Omit<ComponentProps<typeof Item>, "children"> & {
  commentThread: DocumentCommentThreadFields;
};

export const CanvasDocumentCommentThreadItem: FC<CanvasDocumentCommentThreadItemProps> = ({
  commentThread,
  ...props
}) => {
  return (
    <Item {...props}>
      <ItemMedia variant="image">
        <UserAvatar username={commentThread.user} />
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>
            <Username hoverCard username={commentThread.user} />
          </ItemTitle>
          <ItemDescription>{new Date(commentThread.createdAt).toLocaleString()}</ItemDescription>
        </ItemHeader>
        {commentThread.content}
      </ItemContent>
    </Item>
  );
};

CanvasDocumentCommentThreadItem.displayName = "CanvasDocumentCommentThreadItem";
