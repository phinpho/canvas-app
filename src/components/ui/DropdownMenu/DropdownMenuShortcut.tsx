import { cn } from "cn";
import type { ComponentProps, FC } from "react";

export type DropdownMenuShortcutProps = ComponentProps<"span">;

export const DropdownMenuShortcut: FC<DropdownMenuShortcutProps> = ({ className, ...props }) => {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      {...props}
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className,
      )}
    />
  );
};

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
