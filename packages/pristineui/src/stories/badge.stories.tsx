import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/badge";

const meta: Meta<typeof Badge> = {
  title: "PristineUI/Badge",
  component: Badge,
  args: {
    children: "Badge",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Success: Story = {
  args: { variant: "success" },
};

export const Warning: Story = {
  args: { variant: "warning" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};
