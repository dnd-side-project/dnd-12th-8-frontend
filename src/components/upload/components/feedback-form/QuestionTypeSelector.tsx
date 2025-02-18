import {
  PieChartIcon,
  MessageIcon,
  FaceHappyIcon,
  CursorClickIcon,
  LightbulbIcon,
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
  { type: 'KEYWORD', label: '총평 키워드', icon: LightbulbIcon },
] as const;

function QuestionTypeSelector({ onSelect }: QuestionTypeSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {QUESTION_TYPES.map(({ type, label, icon }) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-gray-600">
            <Icon icon={icon} className="h-6 w-6 text-gray-50" />
          </div>
          <span className="font-body3 text-gray-50">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default QuestionTypeSelector;
