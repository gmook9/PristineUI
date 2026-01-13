import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "PristineUI/Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Lines: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <div className="space-y-3">
        <Skeleton className="w-56" />
        <Skeleton className="w-72" variant="subtle" />
        <Skeleton className="w-64" />
      </div>
    </div>
  ),
};

export const Blocks: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <div className="grid max-w-sm grid-cols-3 gap-3">
        <Skeleton className="h-16 w-full rounded-2xl" />
        <Skeleton className="h-16 w-full rounded-2xl" variant="subtle" />
        <Skeleton className="h-16 w-full rounded-2xl" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <div className="space-y-3">
        <Skeleton size="sm" className="w-40" />
        <Skeleton size="md" className="w-52" />
        <Skeleton size="lg" className="w-64" />
      </div>
    </div>
  ),
};
