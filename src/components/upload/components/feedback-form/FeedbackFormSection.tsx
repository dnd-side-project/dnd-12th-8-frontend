import { useState } from 'react';
import ABTestForm from './ABTestForm';
import FeedbackHeader from './FeedbackHeader';
import LikertScaleForm from './LikertScaleForm';
import MoveButton from './MoveButton';
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

function FeedbackFormSection() {
  const [questions, setQuestions] = useState<FeedbackQuestion[]>([]);
  console.log('🚀 ~ FeedbackFormSection ~ questions:', questions);
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const [lastId, setLastId] = useState(0);
  const [showArrows, setShowArrows] = useState<number | null>(null);

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

  const handleQuestionChange = (id: number, value: string) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, question: value } : q)));
  };

  const handleRequiredChange = (id: number) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isRequired: !q.isRequired } : q)),
    );
  };

  const handleOptionsChange = (id: number, newOptions: string[]) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, options: newOptions } : q)));
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
            <FeedbackHeader
              question={question}
              onQuestionChange={handleQuestionChange}
              onRequiredChange={handleRequiredChange}
              onToggleArrows={() => setShowArrows(showArrows === question.id ? null : question.id)}
              onDelete={() => handleDeleteQuestion(question.id)}
            />

            {question.type === 'MULTIPLE_CHOICE' && (
              <MultipleChoiceForm
                options={question.options || []}
                onChange={(newOptions) => handleOptionsChange(question.id, newOptions)}
              />
            )}
            {question.type === 'SHORT_ANSWER' && <ShortAnswerForm />}
            {question.type === 'LIKERT_SCALE' && (
              <LikertScaleForm
                onChange={(newOptions) => handleOptionsChange(question.id, newOptions)}
              />
            )}
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
