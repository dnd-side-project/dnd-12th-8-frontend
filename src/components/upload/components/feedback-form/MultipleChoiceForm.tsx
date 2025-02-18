import { PlusIcon, CloseIcon } from '@/assets/icons';

interface MultipleChoiceFormProps {
  options: string[];
  onChange: (newOptions: string[]) => void;
}

const MultipleChoiceForm = ({ options, onChange }: MultipleChoiceFormProps) => {
  const handleAddOption = () => {
    onChange([...options, '']);
  };

  const handleDeleteOption = (index: number) => {
    onChange(options.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="옵션을 입력하세요"
            className="flex-1 rounded-[10px] bg-gray-600 px-4 py-3 font-body3 text-gray-50 placeholder:text-gray-200"
          />
          <button onClick={() => handleDeleteOption(index)}>
            <CloseIcon icon={CloseIcon} />
          </button>
        </div>
      ))}
      <button
        onClick={handleAddOption}
        className="mt-2 flex items-center gap-2 self-start text-gray-200"
      >
        <PlusIcon className="h-4 w-4" />
        <span>옵션 추가</span>
      </button>
    </div>
  );
};

export default MultipleChoiceForm;
