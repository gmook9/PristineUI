import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/tabs";

const meta: Meta<typeof Tabs> = {
  title: "PristineUI/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          Summary metrics and highlights live here.
        </TabsContent>
        <TabsContent value="details">
          Deeper configuration and metadata details.
        </TabsContent>
        <TabsContent value="activity">
          Activity feed and latest updates.
        </TabsContent>
      </Tabs>
    </div>
  ),
};
