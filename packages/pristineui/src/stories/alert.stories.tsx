import type { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "../components/alert";

const meta: Meta<typeof Alert> = {
  title: "PristineUI/Alert",
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info">
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>Just a bit of helpful context.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Everything completed successfully.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Double-check before you continue.</AlertDescription>
    </Alert>
  ),
};

export const Danger: Story = {
  render: () => (
    <Alert variant="danger">
      <AlertTitle>Danger</AlertTitle>
      <AlertDescription>Something went wrong. Try again.</AlertDescription>
    </Alert>
  ),
};
