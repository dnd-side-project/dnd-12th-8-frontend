import ABTestForm from '@/components/feedback/@shared/ABTestForm';
import LikertScaleForm from '@/components/feedback/@shared/LikertScaleForm';
import type { FeedbackQuestion as FeedbackQuestionType } from '@/types/schema/feedback';

interface FeedbackQuestionProps extends FeedbackQuestionType {
  questionId: number;
  answer?: string | string[];
  onAnswerChange: (answer: string | string[]) => void;
}

const FeedbackQuestion = ({
  questionId,
  questionText,
  questionType,
  options,
  abImageAUrl,
  abImageBUrl,
  answer,
  onAnswerChange,
}: FeedbackQuestionProps) => {
  console.log('🚀 ~ FeedbackQuestion ~ questionId:', questionId);
  const renderQuestionContent = () => {
    switch (questionType) {
      case 'LIKERT_SCALE':
        return <LikertScaleForm onSelect={onAnswerChange} />;

      case 'SHORT_ANSWER':
        return (
          <textarea
            className="h-32 w-full rounded-lg bg-gray-700 p-4 text-gray-50"
            placeholder="답변을 입력해주세요"
            value={(answer as string) || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
          />
        );

      case 'AB_TEST':
        return (
          <ABTestForm
            abImageAUrl={abImageAUrl}
            abImageBUrl={abImageBUrl}
            answer={answer}
            onAnswerChange={onAnswerChange}
          />
        );

      case 'MULTIPLE_CHOICE':
        return (
          <div className="flex flex-col gap-4">
            {options?.map((option, index) => (
              <button
                key={index}
                className={`w-full rounded-lg px-4 py-2 text-left text-gray-50 ${answer === option ? 'bg-purple-500' : 'bg-gray-700 hover:bg-purple-500'}`}
                onClick={() => onAnswerChange(option)}
              >
                {option}
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl bg-gray-800 px-6 py-10">
      <h3 className="font-title2 text-gray-50">{questionText}</h3>
      {renderQuestionContent()}
    </div>
  );
};

export default FeedbackQuestion;
