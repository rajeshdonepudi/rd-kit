import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@rd-kit/ui';
import * as React from 'react';

const meta = { title: 'UI/Calendar', component: Calendar, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<any>;

const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
};

export const Default: Story = {
  render: () => <CalendarDemo />,
};
