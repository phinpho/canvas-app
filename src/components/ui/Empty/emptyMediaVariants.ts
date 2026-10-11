import { cva, type VariantProps } from "class-variance-authority";

export type EmptyMediaVariants = (props?: { variant?: "default" | "icon" }) => string;

export const emptyMediaVariants: EmptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
      },
    },
  },
);

export type EmptyMediaVariantProps = VariantProps<EmptyMediaVariants>;
