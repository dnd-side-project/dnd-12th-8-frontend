import { PlusIcon, CloseIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';

interface MultipleChoiceFormProps {
  options: string[];
  onChange: (newOptions: string[]) => void;
}

const MultipleChoiceForm = ({ options, onChange }: MultipleChoiceFormProps) => {
  const hasEmptyOptions = options.length > 0 && options.some((value) => value.trim() === '');

  const handleAddOption = () => {
    if (hasEmptyOptions) {
      return;
    }

    onChange([...options, '']);
  };

  const handleInputChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    onChange(newOptions);
  };

  const handleDeleteOption = (index: number) => {
    onChange(options.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-3 rounded-[10px] bg-gray-600 px-4 py-3">
          <input
            type="text"
            value={option}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="선택지를 입력하세요"
            className="flex-1 font-body2 text-gray-50 placeholder:text-gray-200"
          />
          <button onClick={() => handleDeleteOption(index)}>
            <Icon icon={CloseIcon} />
          </button>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center rounded-[10px] bg-gray-600 p-3">
          <button
            onClick={handleAddOption}
            disabled={hasEmptyOptions}
            className={`flex items-center gap-2 self-start ${
              hasEmptyOptions
                ? 'cursor-not-allowed text-gray-400'
                : 'text-gray-200 hover:text-gray-50'
            }`}
          >
            <Icon icon={PlusIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceForm;
