import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '@rd-kit/ui';

const meta = {
  title: 'UI/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-4 border rounded border-dashed text-muted-foreground">
      {/* 
        This is a generic wrapper. 
        Modify this story in apps/docs/src/stories/Toaster.stories.tsx to include necessary sub-components.
      */}
      <Toaster />
      <div>Toaster rendered!</div>
    </div>
  ),
};