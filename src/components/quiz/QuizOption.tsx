import { cva } from 'class-variance-authority';
import { CorrectIcon, IncorrectIcon } from '@/assets/icons';
import { Icon } from '../@shared/icons/Icon';

const quizOptionVariants = cva(
  'flex w-full cursor-pointer items-center justify-between rounded-[10px] bg-gray-600 px-5 py-3 border-2 h-[64px]',
  {
    variants: {
      type: {
        CORRECT: 'border-[#185DFF]',
        INCORRECT: 'border-[#FF4646]',
        SELECTED: 'border-purple-400',
        DEFAULT: 'border-gray-600',
      },
    },
    defaultVariants: {
      type: 'DEFAULT',
    },
  },
);

function QuizOption({
  option,
  onChange,
  type = 'DEFAULT',
}: {
  option: string;
  onChange: (answer: string) => void;
  type?: 'CORRECT' | 'INCORRECT' | 'SELECTED' | 'DEFAULT';
}) {
  return (
    <button className={quizOptionVariants({ type })} onClick={() => onChange(option)}>
      <p className="font-body2 text-gray-50">{option}</p>
      {type === 'CORRECT' && <Icon icon={CorrectIcon} />}
      {type === 'INCORRECT' && <Icon icon={IncorrectIcon} />}
    </button>
  );
}

export default QuizOption;
