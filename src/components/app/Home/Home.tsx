import type { ComponentProps, FC } from "react";
import { PageCard } from "../Layout/PageCard.js";
import { PageCardTitle } from "../Layout/PageCardTitle.js";
import { PageLayout } from "../Layout/PageLayout.js";

export type HomeProps = Omit<ComponentProps<typeof PageLayout>, "children">;

export const Home: FC<HomeProps> = ({ ...props }) => {
  return (
    <PageLayout {...props}>
      <PageCard>
        <PageCardTitle>Canvas App - Take Home Exercise</PageCardTitle>
        <p className="mt-4">
          This is a take-home exercise for the Canvas App project. The goal of this exercise is to
          demonstrate your ability to work with React, TypeScript, and Tailwind CSS. Please read the
          instructions carefully and follow them as closely as possible.
        </p>
      </PageCard>
    </PageLayout>
  );
};

Home.displayName = "Home";
