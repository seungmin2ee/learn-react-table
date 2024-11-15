import Input from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'components/common/Input',
  tags: ['autodocs'],
};

export default meta;

export const Field: StoryObj<typeof Input.Field> = {
  args: {
    type: undefined,
    placeholder: undefined,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'checkbox', 'date'] },
    placeholder: { control: 'text' },
  },
  render: (args) => <Input.Field {...args} />,
};

export const Label: StoryObj<typeof Input.Label> = {
  args: {
    children: 'Email',
    isEssential: false,
  },
  render: (args) => (
    <Input.Root>
      <Input.Label {...args}></Input.Label>
      <Input.Field />
    </Input.Root>
  ),
};

export const Description: StoryObj<typeof Input.Description> = {
  args: {
    children: 'Wrong password',
  },
  render: (args) => (
    <div>
      <Input.Field placeholder="password" />
      <Input.Description {...args}></Input.Description>
    </div>
  ),
};
