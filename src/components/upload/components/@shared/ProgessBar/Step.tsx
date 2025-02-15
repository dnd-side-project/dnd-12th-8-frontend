import { cva } from 'class-variance-authority';
import { CheckIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';

interface StepProps {
  type: 'current' | 'completed' | 'default';
  step: number;
}

const stepVariants = cva(
  `h-8 w-8 rounded-full flex items-center justify-center text-gray-50 font-body3`,
  {
    variants: {
      type: {
        current: `border-[2px] border-gray-50 bg-purple-500`,
        completed: `bg-purple-500`,
        default: `bg-gray-600 `,
      },
    },
  },
);

function Step({ type, step }: StepProps) {
  return (
    <div className={stepVariants({ type })}>
      {type === 'completed' ? <Icon icon={CheckIcon} /> : <p>{step}</p>}
    </div>
  );
}

export default Step;
