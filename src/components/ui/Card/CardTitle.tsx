import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardTitleProps = ComponentProps<"div">;

export const CardTitle: FC<CardTitleProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-title"
      {...props}
      className={cn(
        "cn-font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className,
      )}
    />
  );
};

CardTitle.displayName = "CardTitle";
