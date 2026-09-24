import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@rd-kit/ui';

const meta = { title: 'UI/Slider', component: Slider, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Slider>;
export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />,
};
