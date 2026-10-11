import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Separator } from "../Separator/Separator.js";

export type ButtonGroupSeparatorProps = ComponentProps<typeof Separator>;

export const ButtonGroupSeparator: FC<ButtonGroupSeparatorProps> = ({
  className,
  orientation = "vertical",
  ...props
}) => {
  return (
    <Separator
      data-slot="button-group-separator"
      {...props}
      className={cn(
        "relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto",
        className,
      )}
      orientation={orientation}
    />
  );
};

ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
