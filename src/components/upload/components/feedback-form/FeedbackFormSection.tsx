import { useState } from 'react';
import { CloseIcon, ArrowUpIcon, ArrowDownIcon } from '@/assets/icons';
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

  const handleQuestionChange = (id: number, value: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, question: value } : q)));
  };

  const handleAddQuestion = (type: QuestionType) => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
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

    const updatedQuestions = newQuestions.map((q, index) => ({
      ...q,
      id: index + 1,
    }));

    setQuestions(updatedQuestions);
  };

  return (
    <div className="flex flex-col gap-6">
      {questions.map((question, index) => (
        <div key={`question-${question.id}-${index}`}>
          {index > 0 && focusedId === question.id && (
            <div className="mb-4 flex justify-center">
              <Button
                onClick={() => handleMoveQuestion(question.id, 'up')}
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
            onFocus={() => setFocusedId(question.id)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setFocusedId(null);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setFocusedId(question.id);
              }
            }}
            tabIndex={0}
          >
            <div className="absolute top-4 right-4">
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

          {index < questions.length - 1 && focusedId === question.id && (
            <div className="mt-4 flex justify-center">
              <Button
                onClick={() => handleMoveQuestion(question.id, 'down')}
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
