import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/divider";

const meta: Meta<typeof Divider> = {
  title: "PristineUI/Divider",
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <div className="space-y-3 text-sm text-white/70">
        <div>Section One</div>
        <Divider />
        <div>Section Two</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <div className="flex items-center gap-4 text-sm text-white/70">
        <span>Left</span>
        <Divider orientation="vertical" className="h-6" />
        <span>Right</span>
      </div>
    </div>
  ),
};
