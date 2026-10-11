import { cva, type VariantProps } from "class-variance-authority";

export type InputGroupButtonVariants = (props?: {
  size?: "xs" | "sm" | "icon-xs" | "icon-sm";
}) => string;

export const inputGroupButtonVariants: InputGroupButtonVariants = cva(
  "flex items-center gap-2 text-sm shadow-none",
  {
    defaultVariants: {
      size: "xs",
    },
    variants: {
      size: {
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        sm: "",
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      },
    },
  },
);

export type InputGroupButtonVariantProps = VariantProps<InputGroupButtonVariants>;
