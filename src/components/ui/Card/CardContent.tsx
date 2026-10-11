import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardContentProps = ComponentProps<"div">;

export const CardContent: FC<CardContentProps> = ({ className, ...props }) => {
  return (
    <div data-slot="card-content" {...props} className={cn("px-(--card-spacing)", className)} />
  );
};

CardContent.displayName = "CardContent";
