import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type PageCardProps = ComponentProps<"div">;

export const PageCard: FC<PageCardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="page-card"
      {...props}
      className={cn(
        "w-full max-w-3xl p-4 border border-border rounded-lg bg-background shadow-2xs bg-card text-card-foreground shadow-lg",
        className,
      )}
    />
  );
};

PageCard.displayName = "PageCard";
