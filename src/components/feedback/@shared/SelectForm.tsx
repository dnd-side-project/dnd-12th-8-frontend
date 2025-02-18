interface SelectFormProps {
  options: string[] | undefined;
  answer: string | string[] | undefined;
  onAnswerChange: (answer: string | string[]) => void;
}

const SelectForm = ({ options, answer, onAnswerChange }: SelectFormProps) => {
  return (
    <div className="mt-7 flex flex-col gap-4">
      {options?.map((option, index) => (
        <button
          key={index}
          className={`w-full rounded-lg border-2 bg-gray-600 px-5 py-4 text-left font-body2 text-gray-50 transition-all duration-250 ${
            answer === option ? 'border-purple-500 text-purple-400' : 'border-transparent'
          }`}
          onClick={() => onAnswerChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SelectForm;
