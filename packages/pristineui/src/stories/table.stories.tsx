import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../components/table";

const meta: Meta<typeof Table> = {
  title: "PristineUI/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <div className="rounded-2xl bg-slate-950 p-6">
      <Table>
        <TableCaption>Recent sales</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alex Johnson</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$120.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Casey Tran</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$86.50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maria Gomez</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$54.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};
