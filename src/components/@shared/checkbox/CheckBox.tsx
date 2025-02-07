import { cva } from 'class-variance-authority';
import { CheckIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';
import { cn } from '@/utils/cn';

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean; // default: false, 만일 비활성화 원할 시 props로 전달
  variant?: 'gray' | 'primary'; // default: gray, 만일 primary 원할 시 props로 전달
}

const checkboxVariants = cva('relative h-6 w-6 rounded-sm cursor-pointer border', {
  variants: {
    variant: {
      primary: [
        'bg-gray-600 border-gray-400',
        'data-[checked=true]:bg-purple-600',
        'data-[checked=true]:border-0',
      ],
      gray: ['bg-gray-600 border-gray-400'],
    },
    disabled: {
      true: 'bg-gray-700 border-gray-600 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'gray', // default: gray
    disabled: false, // default: false
  },
});

const checkIconVariants = cva('absolute inset-0 flex items-center justify-center', {
  variants: {
    checked: {
      false: 'scale-0 opacity-0',
      true: 'scale-100 opacity-100',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export function CheckBox({ checked, disabled, variant, onChange }: CheckBoxProps) {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      data-checked={checked}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(checkboxVariants({ variant, disabled }))}
    >
      <div className={cn(checkIconVariants({ checked }))}>
        <Icon icon={CheckIcon} width={18} height={14} />
      </div>
    </div>
  );
}

export default CheckBox;
