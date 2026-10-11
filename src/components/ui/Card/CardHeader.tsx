import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardHeaderProps = ComponentProps<"div">;

export const CardHeader: FC<CardHeaderProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-header"
      {...props}
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className,
      )}
    />
  );
};

CardHeader.displayName = "CardHeader";
