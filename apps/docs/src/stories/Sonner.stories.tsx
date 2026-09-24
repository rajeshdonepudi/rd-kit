import type { Meta, StoryObj } from '@storybook/react';
import { SonnerToaster, Button } from '@rd-kit/ui';
import { toast } from 'sonner';

const meta = {
  title: 'UI/SonnerToaster',
  component: SonnerToaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SonnerToaster>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <div className="p-4 border rounded border-dashed text-muted-foreground flex flex-col items-center gap-4">
      <SonnerToaster />
      <Button 
        variant="outline" 
        onClick={() => toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })}
      >
        Show Toast
      </Button>
    </div>
  ),
};
