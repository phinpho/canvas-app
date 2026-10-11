import type { ComponentProps, FC } from "react";
import type { DocumentCommentThreadFields } from "../../../resources/database/DocumentCommentThread.js";
import { Item } from "../../ui/Item/Item.js";
import { ItemContent } from "../../ui/Item/ItemContent.js";
import { ItemDescription } from "../../ui/Item/ItemDescription.js";
import { ItemHeader } from "../../ui/Item/ItemHeader.js";
import { ItemMedia } from "../../ui/Item/ItemMedia.js";
import { ItemTitle } from "../../ui/Item/ItemTitle.js";
import { UserAvatar } from "../UserAvatar.js";
import { Username } from "../Username.js";

export type CommentThreadItemProps = Omit<ComponentProps<typeof Item>, "children" | "id"> &
  Partial<DocumentCommentThreadFields> & {
    hoverCard?: boolean;
  };

export const CommentThreadItem: FC<CommentThreadItemProps> = ({
  id,
  content,
  user,
  createdAt,
  hoverCard = false,
  ...props
}) => {
  if (!(id && createdAt && user)) return null;

  return (
    <Item {...props}>
      <ItemMedia variant="image">
        <UserAvatar username={user} />
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>
            <Username hoverCard={hoverCard} username={user} />
          </ItemTitle>
          <ItemDescription>{new Date(createdAt).toLocaleString()}</ItemDescription>
        </ItemHeader>
        {content}
      </ItemContent>
    </Item>
  );
};

CommentThreadItem.displayName = "CommentThreadItem";
