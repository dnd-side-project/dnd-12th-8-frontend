import { useState } from 'react';
import { CheckBox } from '@/components/@shared/checkbox/CheckBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '체크박스 컴포넌트입니다.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    checked: {
      description: '체크박스의 선택 상태를 제어합니다.',
      default: false,
      control: 'boolean',
    },
    disabled: {
      description: '체크박스의 비활성화 상태를 제어합니다.',
      default: false,
      control: 'boolean',
    },
    variant: {
      description: '체크박스의 스타일을 설정합니다.',
      default: 'gray',
      control: 'radio',
      options: ['gray', 'primary'],
    },
    onChange: {
      description: '체크박스의 상태가 변경될 때 호출되는 함수입니다.',
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const Selected_Default: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};

export const Selected_Primary: Story = {
  args: {
    checked: true,
    variant: 'primary',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    onChange: () => {},
  },
};

const CheckBoxGroupExample = () => {
  const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

  const handleCheckChange = (value: string) => (isChecked: boolean) => {
    setSelectedChecks((prev) =>
      isChecked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  return (
    <div className="flex flex-col gap-4 text-gray-400">
      <div className="flex items-center gap-2">
        <CheckBox
          checked={selectedChecks.includes('check1')}
          onChange={handleCheckChange('check1')}
        />
        <span>체크박스 1</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckBox
          checked={selectedChecks.includes('check2')}
          variant="primary"
          onChange={handleCheckChange('check2')}
        />
        <span>체크박스 2(primary)</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckBox
          checked={selectedChecks.includes('check3')}
          disabled
          onChange={handleCheckChange('check3')}
        />
        <span>비활성화된 체크박스</span>
      </div>
    </div>
  );
};

export const Group: Story = {
  render: () => <CheckBoxGroupExample />,
};
