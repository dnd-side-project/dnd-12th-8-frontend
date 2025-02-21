import RoleChip from './RoleChip';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RoleChip> = {
  title: 'Components/Chip/RoleChip',
  component: RoleChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
    },
  },
  argTypes: {
    role: {
      control: 'radio',
      options: ['DEVELOPER', 'DESIGNER', 'PLANNER', 'ALL'],
      description: '역할 종류',
    },
    className: {
      control: 'text',
      description: '추가 스타일링을 위한 className',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoleChip>;

export const Default: Story = {
  args: {
    role: 'DEVELOPER',
  },
};

export const RoleVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <RoleChip role="DEVELOPER" />
      <RoleChip role="DESIGNER" />
      <RoleChip role="PLANNER" />
      <RoleChip role="ALL" />
    </div>
  ),
};
