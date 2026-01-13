import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "../components/dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "PristineUI/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <Dropdown>
        <DropdownTrigger>Actions</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>View profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};
