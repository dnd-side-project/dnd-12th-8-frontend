import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'white', 'gray', 'lined'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg', 'icon-sm', 'icon-lg'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'lg',
  },
};
