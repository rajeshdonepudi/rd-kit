import type { Meta, StoryObj } from '@storybook/react';
import { Textarea, Label, Button } from '@rd-kit/ui';

const meta = { title: 'UI/Textarea', component: Textarea, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
      <Button className="w-[120px]">Send message</Button>
    </div>
  ),
};
