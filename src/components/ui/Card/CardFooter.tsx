import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardFooterProps = ComponentProps<"div">;

export const CardFooter: FC<CardFooterProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-footer"
      {...props}
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className,
      )}
    />
  );
};

CardFooter.displayName = "CardFooter";
