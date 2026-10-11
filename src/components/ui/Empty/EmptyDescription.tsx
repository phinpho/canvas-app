import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type EmptyDescriptionProps = ComponentProps<"div">;

export const EmptyDescription: FC<EmptyDescriptionProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="empty-description"
      {...props}
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
    />
  );
};

EmptyDescription.displayName = "EmptyDescription";
