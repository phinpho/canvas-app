import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Input } from "../Input/Input.js";

export type InputGroupInputProps = ComponentProps<typeof Input>;

export const InputGroupInput: FC<InputGroupInputProps> = ({ className, ...props }) => {
  return (
    <Input
      data-slot="input-group-control"
      {...props}
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className,
      )}
    />
  );
};

InputGroupInput.displayName = "InputGroupInput";
