import MoneyChip from './MoneyChip';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MoneyChip> = {
  title: 'Components/Chip/MoneyChip',
  component: MoneyChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
    },
  },
  argTypes: {
    amount: {
      control: 'number',
      description: '표시할 금액',
    },
    color: {
      control: 'radio',
      options: ['gray', 'white', 'yellow'],
      description: '칩의 색상',
    },
    className: {
      control: 'text',
      description: '추가 스타일링을 위한 className',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MoneyChip>;

export const Default: Story = {
  args: {
    amount: 0,
    color: 'white',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <MoneyChip amount={10000} color="gray" />
      <MoneyChip amount={20000} color="white" />
      <MoneyChip amount={30000} color="yellow" />
    </div>
  ),
};
