import ABTestForm from '@/components/feedback/@shared/ABTestForm';
import LikertScaleForm from '@/components/feedback/@shared/LikertScaleForm';
import SelectForm from '@/components/feedback/@shared/SelectForm';
import ShortAnswerForm from '@/components/feedback/@shared/ShortAnswerForm';
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
        return <LikertScaleForm options={options} onSelect={onAnswerChange} />;

      case 'SHORT_ANSWER':
        return <ShortAnswerForm answer={answer} onAnswerChange={onAnswerChange} />;

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
        return <SelectForm options={options} answer={answer} onAnswerChange={onAnswerChange} />;

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
