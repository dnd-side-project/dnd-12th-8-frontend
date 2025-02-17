import Image from 'next/image';
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
        return (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-5 gap-4">
              {options?.map((option, index) => (
                <button
                  key={index}
                  className={`rounded-lg px-4 py-2 text-gray-50 ${answer === option ? 'bg-purple-500' : 'bg-gray-700 hover:bg-purple-500'}`}
                  onClick={() => onAnswerChange(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

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
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-50 w-50 shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={abImageAUrl || ''}
                  alt="A안"
                  fill
                  sizes="100px"
                  className="rounded-lg"
                />
              </div>
              <button
                className={`rounded-lg px-4 py-2 text-gray-50 ${answer === 'A' ? 'bg-purple-500' : 'bg-gray-700 hover:bg-purple-500'}`}
                onClick={() => onAnswerChange('A')}
              >
                A안 선택
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-50 w-50 shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={abImageBUrl || ''}
                  alt="A안"
                  fill
                  sizes="100px"
                  className="rounded-lg"
                />
              </div>
              <button
                className={`rounded-lg px-4 py-2 text-gray-50 ${answer === 'B' ? 'bg-purple-500' : 'bg-gray-700 hover:bg-purple-500'}`}
                onClick={() => onAnswerChange('B')}
              >
                B안 선택
              </button>
            </div>
          </div>
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
    <div className="flex flex-col gap-6">
      <h3 className="font-subtitle text-gray-50">{questionText}</h3>
      {renderQuestionContent()}
    </div>
  );
};

export default FeedbackQuestion;
