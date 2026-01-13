import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/textarea";

const meta: Meta<typeof Textarea> = {
  title: "PristineUI/Textarea",
  component: Textarea,
  args: {
    placeholder: "Write a message...",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Rows: Story = {
  args: { rows: 6, placeholder: "6 rows" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};
