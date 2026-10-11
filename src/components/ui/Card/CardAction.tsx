import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardActionProps = ComponentProps<"div">;

export const CardAction: FC<CardActionProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-action"
      {...props}
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
    />
  );
};

CardAction.displayName = "CardAction";
