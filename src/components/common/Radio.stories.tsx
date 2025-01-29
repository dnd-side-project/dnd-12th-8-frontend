import { useState } from 'react';
import { Radio } from './Radio';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '라디오 버튼 컴포넌트입니다.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    checked: {
      description: '라디오 버튼의 선택 상태를 제어합니다.',
      defaultValue: false,
      control: 'boolean',
    },
    onChange: {
      description: '라디오 버튼의 상태가 변경될 때 호출되는 함수입니다.',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

const RadioGroup = () => {
  const [selected, setSelected] = useState('1');

  return (
    <div className="flex gap-4 text-gray-400">
      <div className="flex items-center gap-2">
        <Radio checked={selected === '1'} onChange={() => setSelected('1')} />
        <span>옵션 1</span>
      </div>
      <div className="flex items-center gap-2">
        <Radio checked={selected === '2'} onChange={() => setSelected('2')} />
        <span>옵션 2</span>
      </div>
      <div className="flex items-center gap-2">
        <Radio checked={selected === '3'} onChange={() => setSelected('3')} />
        <span>옵션 3</span>
      </div>
    </div>
  );
};

export const Group: Story = {
  render: () => <RadioGroup />,
};
