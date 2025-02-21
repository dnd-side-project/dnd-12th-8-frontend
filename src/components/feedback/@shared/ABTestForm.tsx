import Image from 'next/image';

interface ABTestFormProps {
  abImageAUrl?: string;
  abImageBUrl?: string;
  answer?: {
    selectedOption?: string;
    responseText?: string;
  };
  onAnswerChange: (answer: [string, string]) => void;
}

const ABTestForm = ({ abImageAUrl, abImageBUrl, answer, onAnswerChange }: ABTestFormProps) => {
  const selectedOption = answer?.selectedOption || '';
  console.log('🚀 ~ ABTestForm ~ selectedOption:', selectedOption);
  console.log(answer);
  const responseText = answer?.responseText || '';

  const handleOptionSelect = (option: 'A' | 'B') => {
    onAnswerChange([option, responseText]);
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAnswerChange([selectedOption || '', e.target.value]);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {['A', 'B'].map((option) => (
          <div key={option} className="flex w-full flex-col items-center">
            <button
              className={`my-5 rounded-full px-4 py-2 text-gray-50 transition-all duration-250 ${
                selectedOption === option ? 'bg-purple-500' : 'bg-gray-700'
              }`}
              onClick={() => handleOptionSelect(option as 'A' | 'B')}
            >
              {option}
            </button>
            <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[10px] tablet:h-[260px] desktop:h-[400px]">
              <Image
                src={option === 'A' ? abImageAUrl || '' : abImageBUrl || ''}
                alt={`${option}안`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-6 rounded-[10px] bg-gray-700 px-4 py-3 tablet:py-5">
        <input
          type="text"
          placeholder="선택한 이유를 입력해 주세요"
          className="font-body2 text-gray-50 placeholder:text-gray-400"
          value={responseText}
          onChange={handleFeedbackChange}
        />
      </div>
    </div>
  );
};

export default ABTestForm;
