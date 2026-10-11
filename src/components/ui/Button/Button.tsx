import type { BaseUIEvent } from "@base-ui/react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";

import { cn } from "cn";
import type { ComponentPropsWithRef, FC, MouseEvent as ReactMouseEvent } from "react";
import { type ButtonVariantProps, buttonVariants } from "./buttonVariants.js";

export type ButtonClickEvent = BaseUIEvent<ReactMouseEvent<HTMLButtonElement, MouseEvent>>;

export type ButtonOnClickHandler = (event: ButtonClickEvent) => void | Promise<void>;

export type ButtonProps = Omit<ComponentPropsWithRef<typeof ButtonPrimitive>, "onClick"> &
  ButtonVariantProps & { onClick?: ButtonOnClickHandler };

export const Button: FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ref,
  ...props
}) => {
  return (
    <ButtonPrimitive
      data-slot="button"
      {...props}
      className={cn(buttonVariants({ size, variant }), className)}
      ref={ref}
      type={type}
    />
  );
};

Button.displayName = "Button";
