import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Button } from "../Button/Button.js";
import {
  type InputGroupButtonVariantProps,
  inputGroupButtonVariants,
} from "./inputGroupButtonVariants.js";

export type InputGroupButtonProps = Omit<ComponentProps<typeof Button>, "size" | "type"> &
  InputGroupButtonVariantProps & {
    type?: "button" | "submit" | "reset";
  };

export const InputGroupButton: FC<InputGroupButtonProps> = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) => {
  return (
    <Button
      data-slot="input-group-button"
      {...props}
      className={cn(inputGroupButtonVariants({ size }), className)}
      data-size={size}
      type={type}
      variant={variant}
    />
  );
};

InputGroupButton.displayName = "InputGroupButton";
