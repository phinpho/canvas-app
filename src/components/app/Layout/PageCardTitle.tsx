import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type PageCardTitleProps = ComponentProps<"h2">;

export const PageCardTitle: FC<PageCardTitleProps> = ({ className, ...props }) => {
  return (
    <h2
      data-slot="page-card-title"
      {...props}
      className={cn("text-2xl border-b mb-4 pb-2", className)}
    />
  );
};

PageCardTitle.displayName = "PageCardTitle";
