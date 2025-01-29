import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface RadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const indicatorVariants = cva(
  'absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full',
  {
    variants: {
      checked: {
        true: 'scale-100 bg-gray-0',
        false: 'scale-0 bg-transparent',
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);

export function Radio({ checked, onChange }: RadioProps) {
  return (
    <div
      role="radio"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={'relative h-6 w-6 cursor-pointer rounded-full bg-gray-600'}
    >
      <div className={cn(indicatorVariants({ checked }))} />
    </div>
  );
}

export default Radio;
