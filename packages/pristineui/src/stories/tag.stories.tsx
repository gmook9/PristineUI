import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../components/tag";

const meta: Meta<typeof Tag> = {
  title: "PristineUI/Tag",
  component: Tag,
  args: {
    children: "Tag",
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-950 p-6">
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="outline">Outline</Tag>
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <Tag onRemove={() => {}}>Removable</Tag>
    </div>
  ),
};
