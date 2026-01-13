import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/select";

const meta: Meta<typeof Select> = {
  title: "PristineUI/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <Select defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </Select>
    </div>
  ),
};
