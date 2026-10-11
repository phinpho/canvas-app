"use client";

import { cn } from "cn";
import { type ComponentProps, type FC, type MouseEvent, useCallback } from "react";
import {
  type InputGroupAddonVariantProps,
  inputGroupAddonVariants,
} from "./inputGroupAddonVariants.js";

export type InputGroupAddonProps = ComponentProps<"div"> & InputGroupAddonVariantProps;

export const InputGroupAddon: FC<InputGroupAddonProps> = ({
  className,
  align = "inline-start",
  ...props
}) => {
  const clickHandler = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }
    event.currentTarget.parentElement?.querySelector("input")?.focus();
  }, []);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: this element is not interactive but focuses the input on click
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: <div> element is used as a container for grouping input addons
    // biome-ignore lint/a11y/useSemanticElements: <div> element is used as a container for grouping input addons
    <div
      data-slot="input-group-addon"
      {...props}
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      onClick={clickHandler}
      role="group"
    />
  );
};

InputGroupAddon.displayName = "InputGroupAddon";
