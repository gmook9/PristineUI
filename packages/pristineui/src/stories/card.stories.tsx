import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent } from "../components/card";

const meta: Meta<typeof Card> = {
  title: "PristineUI/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <div className="min-h-[200px] p-6 bg-slate-950">
      <Card className="max-w-md">
        <CardHeader className="space-y-1">
          <h3 className="text-lg font-medium">Card title</h3>
          <p className="text-sm text-slate-300">Short description</p>
        </CardHeader>
        <CardContent className="text-sm text-slate-200">
          This is card content.
        </CardContent>
      </Card>
    </div>
  ),
};
