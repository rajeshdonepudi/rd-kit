import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@rd-kit/ui';
import { Terminal } from 'lucide-react';

const meta = { title: 'UI/Alert', component: Alert, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
    </Alert>
  ),
};
