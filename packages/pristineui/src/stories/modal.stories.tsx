import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "../components/modal";
import { Button } from "../components/button";

const meta: Meta<typeof Modal> = {
  title: "PristineUI/Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="rounded-2xl bg-slate-950 p-6">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalHeader>
            <ModalTitle>Invite your team</ModalTitle>
            <ModalDescription>
              Send an invite to collaborate on this workspace.
            </ModalDescription>
          </ModalHeader>
          <div className="mt-4 text-sm text-white/70">
            You can change permissions later.
          </div>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Send invite
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};
