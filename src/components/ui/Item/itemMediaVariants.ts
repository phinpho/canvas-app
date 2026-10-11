import { cva, type VariantProps } from "class-variance-authority";

export type ItemMediaVariants = (props?: { variant?: "default" | "icon" | "image" }) => string;

export const itemMediaVariants: ItemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
      },
    },
  },
);

export type ItemMediaVariantProps = VariantProps<ItemMediaVariants>;
