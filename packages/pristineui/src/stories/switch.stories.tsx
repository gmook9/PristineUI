import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/switch";

const meta: Meta<typeof Switch> = {
  title: "PristineUI/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true },
};
