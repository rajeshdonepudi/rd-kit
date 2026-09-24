import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@rd-kit/ui';

const meta = { title: 'UI/Button', component: Button, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => <Button>Button</Button>,
};
export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>,
};
