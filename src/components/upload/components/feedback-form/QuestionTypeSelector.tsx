import {
  PieChartIcon,
  MessageIcon,
  FaceHappyIcon,
  CursorClickIcon,
  PlusIcon,
} from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';

interface QuestionTypeSelectorProps {
  onSelect: (type: QuestionType) => void;
}

export type QuestionType =
  | 'MULTIPLE_CHOICE'
  | 'SHORT_ANSWER'
  | 'LIKERT_SCALE'
  | 'AB_TEST'
  | 'KEYWORD';

const QUESTION_TYPES = [
  { type: 'MULTIPLE_CHOICE', label: '객관식', icon: PieChartIcon },
  { type: 'SHORT_ANSWER', label: '주관식', icon: MessageIcon },
  { type: 'LIKERT_SCALE', label: '리커트', icon: FaceHappyIcon },
  { type: 'AB_TEST', label: 'A/B', icon: CursorClickIcon },
] as const;

function QuestionTypeSelector({ onSelect }: QuestionTypeSelectorProps) {
  return (
    <div className="rounded-[20px] bg-gray-800 px-10 py-7">
      <PlusIcon className="mx-auto h-6 w-6 text-gray-50 mb-5" />
      <div className="flex flex-wrap justify-center gap-5">
        {QUESTION_TYPES.map(({ type, label, icon }) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-full bg-gray-700 transition-colors hover:bg-gray-600">
              <Icon icon={icon} className="h-6 w-6 text-gray-50" />
              <span className="font-caption2 text-gray-50">{label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionTypeSelector;
