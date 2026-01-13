import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/accordion";

const meta: Meta<typeof Accordion> = {
  title: "PristineUI/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion defaultValue="item-1" className="max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">
          What is PristineUI?
          <span className="text-white/40">+</span>
        </AccordionTrigger>
        <AccordionContent value="item-1">
          A lightweight set of UI primitives for fast product work.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">
          Can I customize styles?
          <span className="text-white/40">+</span>
        </AccordionTrigger>
        <AccordionContent value="item-2">
          Yes. You can override classes or wrap components for your theme.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger value="item-3">
          Is it accessible?
          <span className="text-white/40">+</span>
        </AccordionTrigger>
        <AccordionContent value="item-3">
          The trigger uses button semantics and sets aria-expanded.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
