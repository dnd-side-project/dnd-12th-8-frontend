import { useState } from 'react';

interface ShortAnswerFormProps {
  answer: string | string[] | undefined;
  onAnswerChange: (answer: string) => void;
}

const ShortAnswerForm = ({ answer, onAnswerChange }: ShortAnswerFormProps) => {
  const [feedbackText, setFeedbackText] = useState(answer as string);

  const handleFeedbackChange = (feedback: string) => {
    setFeedbackText(feedback);
    onAnswerChange(feedback);
  };

  return (
    <div className="mt-7 flex flex-col gap-6 rounded-[10px] bg-gray-700 px-4 py-3 tablet:py-5">
      <textarea
        placeholder="답변을 입력해 주세요"
        className="max-h-[500px] min-h-[100px] w-full resize-y bg-transparent font-body2 text-gray-50 placeholder:text-gray-400 focus:outline-none"
        value={feedbackText}
        onChange={(e) => handleFeedbackChange(e.target.value)}
      />
    </div>
  );
};

export default ShortAnswerForm;
