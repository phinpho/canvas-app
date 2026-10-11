import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type InputGroupTextProps = ComponentProps<"span">;

export const InputGroupText: FC<InputGroupTextProps> = ({ className, ...props }) => {
  return (
    <span
      data-slot="input-group-text"
      {...props}
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
    />
  );
};

InputGroupText.displayName = "InputGroupText";
