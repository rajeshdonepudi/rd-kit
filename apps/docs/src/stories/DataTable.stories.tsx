import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '@rd-kit/ui';
import { ColumnDef } from '@tanstack/react-table';

const meta = {
  title: 'UI/DataTable',
  component: DataTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<any>;

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const columns: any[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "928ed52f",
    amount: 50,
    status: "success",
    email: "test@test.com",
  },
  {
    id: "1028ed52f",
    amount: 10,
    status: "failed",
    email: "hello@world.com",
  },
];

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const ServerSide: Story = {
  render: () => {
    const [pagination, setPagination] = React.useState({
      pageIndex: 0,
      pageSize: 10,
    });
    const [sorting, setSorting] = React.useState<any>([]);

    return (
      <DataTable
        columns={columns}
        data={data}
        pageCount={10}
        pagination={pagination}
        onPaginationChange={setPagination}
        manualPagination={true}
        sorting={sorting}
        onSortingChange={setSorting}
        manualSorting={true}
      />
    );
  },
};
