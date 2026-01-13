import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
} from "../components/toast";

const meta: Meta<typeof Toast> = {
  title: "PristineUI/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <Toast>
        <ToastTitle>Project updated</ToastTitle>
        <ToastDescription>
          Your changes were saved successfully.
        </ToastDescription>
        <div className="mt-3 flex justify-end">
          <ToastAction>Undo</ToastAction>
        </div>
      </Toast>
    </div>
  ),
};
