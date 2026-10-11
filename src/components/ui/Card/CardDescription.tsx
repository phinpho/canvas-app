import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardDescriptionProps = ComponentProps<"div">;

export const CardDescription: FC<CardDescriptionProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-description"
      {...props}
      className={cn("text-sm text-muted-foreground", className)}
    />
  );
};

CardDescription.displayName = "CardDescription";
