import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@rd-kit/ui';
import { Bold } from 'lucide-react';

const meta = { title: 'UI/Toggle', component: Toggle, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};