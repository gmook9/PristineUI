import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/input";

const meta: Meta<typeof Input> = {
  title: "PristineUI/Input",
  component: Input,
  args: {
    placeholder: "Type here...",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Password: Story = {
  args: { type: "password", placeholder: "Password" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};
