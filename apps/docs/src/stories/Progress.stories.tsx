import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@rd-kit/ui';

const meta = { title: 'UI/Progress', component: Progress, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => <Progress value={33} className="w-[60%]" />,
};
