import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Input, Button } from '@rd-kit/ui';
import { useForm } from 'react-hook-form';

const meta = {
  title: 'UI/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm({
      defaultValues: {
        username: "",
      },
    });

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-8 border p-6 rounded-md w-[400px]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
};
