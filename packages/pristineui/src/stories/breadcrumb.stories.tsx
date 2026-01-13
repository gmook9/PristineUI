import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../components/breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "PristineUI/Breadcrumb",
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Library</BreadcrumbLink>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span className="text-white">Data</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
