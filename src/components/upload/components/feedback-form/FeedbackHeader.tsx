import { CloseIcon, FilterLinesIcon } from '@/assets/icons';
import CheckBox from '@/components/@shared/checkbox/CheckBox';
import { Icon } from '@/components/@shared/icons/Icon';
import { QuestionType } from './QuestionTypeSelector';

interface FeedbackQuestion {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  isRequired: boolean;
}

interface FeedbackComponentsHeaderProps {
  question: FeedbackQuestion;
  onQuestionChange: (id: number, value: string) => void;
  onRequiredChange: (id: number) => void;
  onToggleArrows: () => void;
  onDelete: () => void;
}

const FeedbackHeader = ({
  question,
  onQuestionChange,
  onRequiredChange,
  onToggleArrows,
  onDelete,
}: FeedbackComponentsHeaderProps) => {
  return (
    <div className="mb-7">
      <input
        type="text"
        value={question.question}
        onChange={(e) => onQuestionChange(question.id, e.target.value)}
        placeholder="질문을 입력해주세요"
        className="mb-4 w-full bg-transparent font-title2 text-gray-50 placeholder:text-gray-200 focus:outline-none"
      />
      <div className="absolute top-10 right-6 flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleArrows();
          }}
          className="rounded-full"
        >
          <Icon icon={FilterLinesIcon} className="h-5 w-5" />
        </button>
        <button onClick={onDelete} className="rounded-full">
          <Icon icon={CloseIcon} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <CheckBox
          checked={question.isRequired}
          onChange={() => onRequiredChange(question.id)}
          variant="primary"
        />
        <span className="font-body3 text-gray-50">필수</span>
      </div>
    </div>
  );
};

export default FeedbackHeader;
