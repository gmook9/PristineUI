import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

const meta: Meta<typeof Button> = {
  title: "PristineUI/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Subtle: Story = {
  args: { variant: "subtle" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
