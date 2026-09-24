import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@rd-kit/ui';

const meta = { title: 'UI/Badge', component: Badge, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => <Badge>Badge</Badge>,
};
export const Secondary: Story = {
  render: () => <Badge variant="secondary">Secondary</Badge>,
};
