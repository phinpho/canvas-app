import type { ComponentProps, FC } from "react";
import { PageLayout } from "../Layout/PageLayout.js";

export type HomeProps = Omit<ComponentProps<typeof PageLayout>, "children">;

export const Home: FC<HomeProps> = ({ ...props }) => {
  return (
    <PageLayout {...props}>
      <div className="w-full md:w-3xl md:mx-auto p-4 border border-border rounded-lg bg-background shadow-2xs">
        <h1 className="text-2xl border-b">Canvas App - Take Home Exercise</h1>
        <p className="mt-4">
          This is a take-home exercise for the Canvas App project. The goal of this exercise is to
          demonstrate your ability to work with React, TypeScript, and Tailwind CSS. Please read the
          instructions carefully and follow them as closely as possible.
        </p>
      </div>
    </PageLayout>
  );
};

Home.displayName = "Home";
