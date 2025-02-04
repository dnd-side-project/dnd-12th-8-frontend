import { cva } from 'class-variance-authority';
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
        {/* TODO: 추후 svg style 정립되면 이전 예정 */}
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_457_1633)">
            <path
              d="M5.33346 9.9022L2.4846 7.05334C2.25589 6.82462 1.94568 6.69613 1.62223 6.69613C1.29878 6.69613 0.988578 6.82462 0.759864 7.05334C0.53115 7.28205 0.402659 7.59225 0.402659 7.91571C0.402659 8.07586 0.434205 8.23445 0.495494 8.38242C0.556783 8.53038 0.646616 8.66483 0.759864 8.77807L4.47542 12.4936C4.95226 12.9705 5.72332 12.9705 6.20016 12.4936L15.6046 3.08919C15.8333 2.86047 15.9618 2.55027 15.9618 2.22682C15.9618 1.90337 15.8333 1.59316 15.6046 1.36445C15.3759 1.13573 15.0657 1.00724 14.7422 1.00724C14.4188 1.00724 14.1087 1.13569 13.88 1.36433C13.8799 1.36437 13.8799 1.36441 13.8799 1.36445L5.33346 9.9022Z"
              fill="white"
              stroke="white"
              stroke-width="0.666667"
            />
          </g>
          <defs>
            <clipPath id="clip0_457_1633">
              <rect width="17.3333" height="13.3333" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default CheckBox;
