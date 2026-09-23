import type { Meta, StoryObj } from '@storybook/react';
import { Label, Checkbox } from '@rd-kit/ui';

const meta = { title: 'UI/Label', component: Label, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};