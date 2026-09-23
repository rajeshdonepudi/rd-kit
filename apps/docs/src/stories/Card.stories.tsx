import type { Meta, StoryObj } from '@storybook/react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@rd-kit/ui';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-1.5">
          <p className="text-sm text-muted-foreground">
            This is the content of the card. You can put forms, lists, or any other elements here.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button className="px-4 py-2 border rounded-md">Cancel</button>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Deploy</button>
      </CardFooter>
    </Card>
  ),
};
