import { useState } from 'react';
import DoubleCircle from '@/components/@shared/double-circle/DoubleCircle';

interface LikertScaleFormProps {
  onSelect: (answer: string | string[]) => void;
}

const LikertScaleForm = ({ onSelect }: LikertScaleFormProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const options = [
    { value: 1, label: '매우 나쁨' },
    { value: 2, label: '나쁨' },
    { value: 3, label: '보통' },
    { value: 4, label: '좋음' },
    { value: 5, label: '매우 좋음' },
  ];

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onSelect(value.toString());
  };

  return (
    <div>
      <div className="mx-auto my-7 flex w-full items-center justify-between">
        {options.map((option) => (
          <DoubleCircle
            isSelected={selectedValue === option.value}
            className={`${
              option.value === 1
                ? 'h-12 w-12 tablet:h-20 tablet:w-20 border-purple-50'
                : option.value === 2
                  ? 'h-10 w-10 tablet:h-15 tablet:w-15 border-purple-200'
                  : option.value === 3
                    ? 'h-8 w-8 tablet:h-10.5 tablet:w-10.5 border-purple-300'
                    : option.value === 4
                      ? 'h-10 w-10 tablet:h-15 tablet:w-15 border-purple-200'
                      : 'h-12 w-12 tablet:h-20 tablet:w-20 border-purple-50'
            }`}
            key={option.value}
            onClick={() => handleSelect(option.value)}
          />
        ))}
      </div>
      <div className="flex justify-between tablet:px-2">
        <div className="font-body3 text-gray-300">매우 만족</div>
        <div className="font-body3 text-gray-300">매우 불만족</div>
      </div>
    </div>
  );
};

export default LikertScaleForm;
