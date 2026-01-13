import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "PristineUI/Tooltip",
  component: Tooltip,
  args: {
    content: "Helpful tooltip text",
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: (args) => (
    <div className="flex min-h-[120px] items-center justify-center">
      <Tooltip {...args}>
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
          Hover me
        </span>
      </Tooltip>
    </div>
  ),
};

export const Bottom: Story = {
  args: { side: "bottom", content: "Bottom tooltip" },
  render: (args) => (
    <div className="flex min-h-[120px] items-center justify-center">
      <Tooltip {...args}>
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
          Hover me
        </span>
      </Tooltip>
    </div>
  ),
};

export const Left: Story = {
  args: { side: "left", content: "Left tooltip" },
  render: (args) => (
    <div className="flex min-h-[120px] items-center justify-center">
      <Tooltip {...args}>
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
          Hover me
        </span>
      </Tooltip>
    </div>
  ),
};

export const Right: Story = {
  args: { side: "right", content: "Right tooltip" },
  render: (args) => (
    <div className="flex min-h-[120px] items-center justify-center">
      <Tooltip {...args}>
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
          Hover me
        </span>
      </Tooltip>
    </div>
  ),
};
