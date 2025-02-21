interface SelectFormProps {
  options: string[] | undefined;
  answer: string | string[] | undefined;
  onAnswerChange: (answer: string | string[]) => void;
}

const SelectForm = ({ options, answer, onAnswerChange }: SelectFormProps) => {
  const selectedIndex = answer ? Number(answer) : null;

  return (
    <div className="mt-7 flex flex-col gap-4">
      {options?.map((option, index) => (
        <button
          key={index}
          className={`w-full rounded-lg border-2 bg-gray-600 px-5 py-4 text-left font-body2 text-gray-50 transition-all duration-250 ${
            selectedIndex === index + 1 ? 'border-purple-500 text-purple-400' : 'border-transparent'
          }`}
          onClick={() => onAnswerChange(String(index + 1))}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SelectForm;
