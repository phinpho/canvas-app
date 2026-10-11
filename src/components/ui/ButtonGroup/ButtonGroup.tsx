import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { type ButtonGroupVariantProps, buttonGroupVariants } from "./buttonGroupVariants.js";

export type ButtonGroupProps = ComponentProps<"div"> & ButtonGroupVariantProps;

export const ButtonGroup: FC<ButtonGroupProps> = ({ className, orientation, ...props }) => {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <div> element is used as a container for grouping buttons
    <div
      data-slot="button-group"
      {...props}
      className={cn(buttonGroupVariants({ orientation }), className)}
      data-orientation={orientation}
      role="group"
    />
  );
};

ButtonGroup.displayName = "ButtonGroup";
