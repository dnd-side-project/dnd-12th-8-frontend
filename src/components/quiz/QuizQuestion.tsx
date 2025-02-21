import { QuizResponse } from '@/generated';
import QuizOption from './QuizOption';

function QuizQuestion({
  order,
  data,
  onChange,
  answer,
}: {
  order: number;
  data?: QuizResponse;
  answer?: string;
  onChange: (answer: string) => void;
}) {
  console.log('answer', answer);

  return (
    <div className="flex flex-col gap-6 rounded-[10px] bg-gray-800 px-3 py-6">
      <p className="font-subtitle text-gray-50">
        {order}. {data?.question}
      </p>
      <div className="flex flex-col gap-3">
        {data?.options?.map((option) => {
          const isSelected = answer === option;
          return (
            <QuizOption
              key={option}
              option={option}
              onChange={onChange}
              type={isSelected ? 'SELECTED' : 'DEFAULT'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuizQuestion;
