import type { ComponentProps, FC } from "react";
import type {
  DocumentCommentThread,
  DocumentCommentThreadFields,
} from "../../../resources/database/DocumentCommentThread.js";
import { Item } from "../../ui/Item/Item.js";
import { ItemContent } from "../../ui/Item/ItemContent.js";
import { ItemDescription } from "../../ui/Item/ItemDescription.js";
import { ItemMedia } from "../../ui/Item/ItemMedia.js";
import { ItemTitle } from "../../ui/Item/ItemTitle.js";
import { UserAvatar } from "../../utils/UserAvatar.js";
import { Username } from "../../utils/Username.js";

export type CommentBoxThreadItemProps = ComponentProps<typeof Item> & {
  documentCommentThread: DocumentCommentThread | DocumentCommentThreadFields;
};

export const CommentBoxThreadItem: FC<CommentBoxThreadItemProps> = ({
  documentCommentThread,
  ...props
}) => {
  return (
    <Item {...props}>
      <ItemMedia>
        <UserAvatar username={documentCommentThread.user} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>
          <Username username={documentCommentThread.user} />
        </ItemTitle>
        <ItemDescription>{documentCommentThread.content}</ItemDescription>
      </ItemContent>
    </Item>
  );
};

CommentBoxThreadItem.displayName = "CommentBoxThreadItem";
