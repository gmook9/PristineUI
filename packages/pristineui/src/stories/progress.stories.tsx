import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../components/progress";

const meta: Meta<typeof Progress> = {
  title: "PristineUI/Progress",
  component: Progress,
  args: {
    value: 35,
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Half: Story = {
  args: { value: 50 },
};

export const Complete: Story = {
  args: { value: 100 },
};

export const CustomMax: Story = {
  args: { value: 30, max: 60 },
};
