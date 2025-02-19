import { useState } from 'react';
import { CloseIcon, ArrowUpIcon, ArrowDownIcon, FilterLinesIcon } from '@/assets/icons';
import Button from '@/components/@shared/button/Button';
import { Icon } from '@/components/@shared/icons/Icon';
import ABTestForm from './ABTestForm';
import LikertScaleForm from './LikertScaleForm';
import MultipleChoiceForm from './MultipleChoiceForm';
import QuestionTypeSelector, { QuestionType } from './QuestionTypeSelector';
import ShortAnswerForm from './ShortAnswerForm';

interface FeedbackQuestion {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  isRequired: boolean;
}

const MoveButton = ({ direction, onClick }: { direction: 'up' | 'down'; onClick: () => void }) => (
  <div className={`${direction === 'up' ? 'mb-4' : 'mt-4'} flex justify-center`}>
    <Button
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      variant="gray"
      size="icon-sm"
      className="flex items-center justify-center rounded-full py-2"
    >
      <Icon icon={direction === 'up' ? ArrowUpIcon : ArrowDownIcon} />
    </Button>
  </div>
);

const QuestionControls = ({
  onToggleArrows,
  onDelete,
}: {
  onToggleArrows: () => void;
  onDelete: () => void;
}) => (
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
);

function FeedbackFormSection() {
  const [questions, setQuestions] = useState<FeedbackQuestion[]>([]);
  console.log('🚀 ~ FeedbackFormSection ~ questions:', questions);
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const [lastId, setLastId] = useState(0);
  const [showArrows, setShowArrows] = useState<number | null>(null);

  const handleQuestionChange = (id: number, value: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, question: value } : q)));
  };

  const handleAddQuestion = (type: QuestionType) => {
    const newId = lastId + 1;
    setLastId(newId);
    setQuestions([
      ...questions,
      {
        id: newId,
        type,
        question: '',
        options: type === 'MULTIPLE_CHOICE' ? [''] : undefined,
        isRequired: false,
      },
    ]);
  };

  const handleDeleteQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleMoveQuestion = (id: number, direction: 'up' | 'down') => {
    const currentIndex = questions.findIndex((q) => q.id === id);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === questions.length - 1)
    )
      return;

    const newQuestions = [...questions];
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    [newQuestions[currentIndex], newQuestions[newIndex]] = [
      newQuestions[newIndex],
      newQuestions[currentIndex],
    ];

    setQuestions(newQuestions);
    setFocusedId(null);
  };

  return (
    <div className="flex flex-col gap-6">
      {questions.map((question, index) => (
        <div key={question.id} className="transition-all duration-300 ease-in-out">
          {showArrows === question.id && index > 0 && (
            <MoveButton
              direction="up"
              onClick={() => {
                handleMoveQuestion(question.id, 'up');
                setShowArrows(null);
              }}
            />
          )}

          <section
            role="button"
            className={`relative rounded-[10px] bg-gray-800 px-6 py-10 ${
              focusedId === question.id ? 'border-1 border-gray-100' : ''
            }`}
            onClick={() => setFocusedId(question.id)}
            onBlur={() => {
              setFocusedId(null);
              setShowArrows(null);
            }}
            tabIndex={0}
          >
            <QuestionControls
              onToggleArrows={() => setShowArrows(showArrows === question.id ? null : question.id)}
              onDelete={() => handleDeleteQuestion(question.id)}
            />

            <input
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(question.id, e.target.value)}
              placeholder="질문을 입력해주세요"
              className="mb-4 w-full bg-transparent font-title2 text-gray-50 placeholder:text-gray-200 focus:outline-none"
            />

            {question.type === 'MULTIPLE_CHOICE' && (
              <MultipleChoiceForm
                options={question.options || []}
                onChange={(newOptions) =>
                  setQuestions(
                    questions.map((q) =>
                      q.id === question.id ? { ...q, options: newOptions } : q,
                    ),
                  )
                }
              />
            )}
            {question.type === 'SHORT_ANSWER' && (
              <ShortAnswerForm
                isRequired={question.isRequired}
                onRequiredChange={(required) =>
                  setQuestions((prev) =>
                    prev.map((q) => (q.id === question.id ? { ...q, isRequired: required } : q)),
                  )
                }
              />
            )}
            {question.type === 'LIKERT_SCALE' && <LikertScaleForm />}
            {question.type === 'AB_TEST' && <ABTestForm />}
          </section>

          {showArrows === question.id && index < questions.length - 1 && (
            <MoveButton
              direction="down"
              onClick={() => {
                handleMoveQuestion(question.id, 'down');
                setShowArrows(null);
              }}
            />
          )}
        </div>
      ))}

      <QuestionTypeSelector onSelect={handleAddQuestion} />
    </div>
  );
}

export default FeedbackFormSection;
