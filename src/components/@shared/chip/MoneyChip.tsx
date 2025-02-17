import { cva } from 'class-variance-authority';
import { CoinsStackedIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';
import { cn } from '@/utils/cn';

type MoneyChipColor = 'white' | 'yellow' | 'gray';

const moneyChipVariants = cva(
  'inline-flex items-center gap-2 rounded-3xl px-3 py-1 bg-gray-600 font-caption1 border',
  {
    variants: {
      color: {
        white: 'text-white border-gray-600',
        yellow: 'text-white border-yellow-400',
        gray: 'text-gray-200 border-gray-600',
      },
    },
    defaultVariants: {
      color: 'gray',
    },
  },
);

interface MoneyChipProps {
  className?: string;
  amount: number;
  color?: string;
}

function MoneyChip({ amount = 0, color = 'white', className }: MoneyChipProps) {
  return (
    <div className={cn(moneyChipVariants({ color: color as MoneyChipColor }), className)}>
      <Icon icon={CoinsStackedIcon} width={24} height={24} color="currentColor" />
      <span>{amount}p</span>
    </div>
  );
}

export default MoneyChip;
