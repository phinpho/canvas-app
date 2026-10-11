"use client";

import { XIcon } from "lucide-react";
import { type ComponentProps, type FC, useMemo } from "react";
import { useDocumentComments } from "../../../hooks/useDocumentComments.js";
import { Badge } from "../../ui/Badge/Badge.js";
import { Button } from "../../ui/Button/Button.js";
import { Drawer } from "../../ui/Drawer/Drawer.js";
import { DrawerClose } from "../../ui/Drawer/DrawerClose.js";
import { DrawerContent } from "../../ui/Drawer/DrawerContent.js";
import { DrawerDescription } from "../../ui/Drawer/DrawerDescription.js";
import { DrawerFooter } from "../../ui/Drawer/DrawerFooter.js";
import { DrawerHeader } from "../../ui/Drawer/DrawerHeader.js";
import { DrawerTitle } from "../../ui/Drawer/DrawerTitle.js";
import { DrawerTrigger } from "../../ui/Drawer/DrawerTrigger.js";
import { ScrollArea } from "../../ui/ScrollArea/ScrollArea.js";
import { Tabs } from "../../ui/Tabs/Tabs.js";
import { TabsContent } from "../../ui/Tabs/TabsContent.js";
import { TabsList } from "../../ui/Tabs/TabsList.js";
import { TabsTrigger } from "../../ui/Tabs/TabsTrigger.js";
import { CanvasDocumentCommentItem } from "./CanvasDocumentCommentItem.js";

export type CanvasDocumentCommentsDrawerProps = ComponentProps<typeof Button> & {
  documentId: string;
};

export const CanvasDocumentCommentsDrawer: FC<CanvasDocumentCommentsDrawerProps> = ({
  children,
  documentId,
  ...props
}) => {
  const {
    documentCommentsOpen,
    documentCommentsOpenCount,
    documentCommentsResolved,
    documentCommentsResolvedCount,
  } = useDocumentComments(documentId);

  const defaultTabValue = useMemo(() => {
    if (documentCommentsResolvedCount && !documentCommentsOpenCount) {
      return "resolved";
    }
    return "open";
  }, [documentCommentsOpenCount, documentCommentsResolvedCount]);

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button {...props} />}>{children}</DrawerTrigger>
      <DrawerContent>
        <Tabs
          className="w-full flex flex-col gap-2 px-2 h-full overflow-hidden"
          defaultValue={defaultTabValue}
        >
          <DrawerHeader className="flex flex-row items-center justify-stretch w-full">
            <div className="sr-only">
              <DrawerTitle>Comments</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </div>
            <TabsList>
              <TabsTrigger value="open">
                Open
                <Badge variant="outline">{documentCommentsOpenCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="resolved">
                Resolved
                <Badge variant="outline">{documentCommentsResolvedCount}</Badge>
              </TabsTrigger>
            </TabsList>
            <DrawerClose className="ml-auto" render={<Button size="icon-sm" variant="ghost" />}>
              <XIcon />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </DrawerHeader>
          <TabsContent className="w-full h-full overflow-auto" value="open">
            <ScrollArea>
              <div className="p-px flex flex-col gap-2">
                {documentCommentsOpen.map((comment) => (
                  <CanvasDocumentCommentItem documentComment={comment} key={comment.id} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="resolved">
            {documentCommentsResolved.map((comment) => (
              <CanvasDocumentCommentItem documentComment={comment} key={comment.id} />
            ))}
          </TabsContent>
        </Tabs>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

CanvasDocumentCommentsDrawer.displayName = "CanvasDocumentCommentsDrawer";
