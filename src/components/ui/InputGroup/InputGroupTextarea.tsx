import { cn } from "cn";
import type { ComponentProps, FC } from "react";
import { Textarea } from "../Textarea/Textarea.js";

export type InputGroupTextareaProps = ComponentProps<typeof Textarea>;

export const InputGroupTextarea: FC<InputGroupTextareaProps> = ({ className, ...props }) => {
  return (
    <Textarea
      data-slot="input-group-control"
      {...props}
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className,
      )}
    />
  );
};

InputGroupTextarea.displayName = "InputGroupTextarea";
