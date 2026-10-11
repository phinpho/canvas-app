import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type CardProps = ComponentProps<"div"> & {
  size?: "default" | "sm";
};

export const Card: FC<CardProps> = ({ className, size = "default", ...props }) => {
  return (
    <div
      data-slot="card"
      {...props}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className,
      )}
      data-size={size}
    />
  );
};

Card.displayName = "Card";
