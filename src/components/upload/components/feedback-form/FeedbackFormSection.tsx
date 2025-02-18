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
}

function FeedbackFormSection() {
  const [questions, setQuestions] = useState<FeedbackQuestion[]>([]);
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
    console.log(questions);
    setFocusedId(null);
  };

  return (
    <div className="flex flex-col gap-6">
      {questions.map((question, index) => (
        <div key={question.id} className="transition-all duration-300 ease-in-out">
          {showArrows === question.id && index > 0 && (
            <div className="mb-4 flex justify-center transition-all duration-300 ease-in-out">
              <Button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  handleMoveQuestion(question.id, 'up');
                  setShowArrows(null);
                }}
                variant="gray"
                size="icon-sm"
                className="flex items-center justify-center rounded-full py-2"
              >
                <Icon icon={ArrowUpIcon} />
              </Button>
            </div>
          )}

          <section
            role="button"
            className={`relative rounded-[10px] bg-gray-700 p-4 ${
              focusedId === question.id ? 'border-1 border-white' : ''
            }`}
            onClick={() => setFocusedId(question.id)}
            onBlur={(e) => {
              const currentTarget = e.currentTarget;

              if (currentTarget && !currentTarget.contains(document.activeElement)) {
                setFocusedId(null);
              }
              setShowArrows(null);
            }}
            tabIndex={0}
          >
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                className="rounded-full p-1 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowArrows(showArrows === question.id ? null : question.id);
                }}
              >
                <Icon icon={FilterLinesIcon} className="h-5 w-5" />
              </button>
              <button onClick={() => handleDeleteQuestion(question.id)}>
                <Icon icon={CloseIcon} />
              </button>
            </div>

            <input
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(question.id, e.target.value)}
              placeholder="질문을 입력해주세요"
              className="mb-4 w-full font-body2 text-gray-50 placeholder:text-gray-200"
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
            {question.type === 'SHORT_ANSWER' && <ShortAnswerForm />}
            {question.type === 'LIKERT_SCALE' && <LikertScaleForm />}
            {question.type === 'AB_TEST' && <ABTestForm />}
          </section>

          {showArrows === question.id && index < questions.length - 1 && (
            <div className="mt-4 flex justify-center transition-all duration-300 ease-in-out">
              <Button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  handleMoveQuestion(question.id, 'down');
                  setShowArrows(null);
                }}
                variant="gray"
                size="icon-sm"
                className="flex items-center justify-center rounded-full py-2"
              >
                <Icon icon={ArrowDownIcon} />
              </Button>
            </div>
          )}
        </div>
      ))}

      {/* 하단 질문 유형 선택기 */}
      <div className="rounded-[20px] bg-gray-800 p-6">
        <QuestionTypeSelector onSelect={handleAddQuestion} />
      </div>
    </div>
  );
}

export default FeedbackFormSection;
