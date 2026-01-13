import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "PristineUI/Checkbox",
  component: Checkbox,
  args: {
    label: "Accept terms",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};
