import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@rd-kit/ui';

const meta = { title: 'UI/Tabs', component: Tabs, parameters: { layout: 'centered' }, tags: ['autodocs'] } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md mt-2">Make changes to your account here.</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md mt-2">Change your password here.</div>
      </TabsContent>
    </Tabs>
  ),
};