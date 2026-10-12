import { cn } from "cn";
import { FileWarningIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { NavLink } from "react-router";
import { Button } from "../../ui/Button/Button.js";
import { Empty } from "../../ui/Empty/Empty.js";
import { EmptyContent } from "../../ui/Empty/EmptyContent.js";
import { EmptyDescription } from "../../ui/Empty/EmptyDescription.js";
import { EmptyHeader } from "../../ui/Empty/EmptyHeader.js";
import { EmptyMedia } from "../../ui/Empty/EmptyMedia.js";
import { EmptyTitle } from "../../ui/Empty/EmptyTitle.js";

export type CanvasDocumentNotFoundProps = Omit<ComponentProps<typeof Empty>, "children">;

export const CanvasDocumentNotFound: FC<CanvasDocumentNotFoundProps> = ({
  className,
  ...props
}) => {
  return (
    <Empty {...props} className={cn("w-full h-full", className)}>
      <EmptyMedia variant="icon">
        <FileWarningIcon />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Document not found</EmptyTitle>
        <EmptyDescription>The document you are looking for does not exist.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button nativeButton={false} render={<NavLink end replace to="/document" viewTransition />}>
          Documents dashboard
        </Button>
        <Button
          nativeButton={false}
          render={<NavLink end replace to="/" viewTransition />}
          variant="outline"
        >
          Home
        </Button>
      </EmptyContent>
    </Empty>
  );
};
