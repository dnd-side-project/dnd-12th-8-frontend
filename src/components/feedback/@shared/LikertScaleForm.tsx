import { useState } from 'react';
import DoubleCircle from '@/components/@shared/double-circle/DoubleCircle';

interface LikertScaleFormProps {
  options?: string[];
  onSelect: (answer: string | string[]) => void;
}

const LikertScaleForm = ({ options = [], onSelect }: LikertScaleFormProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  // options 배열의 첫 번째와 마지막 값만 사용
  const displayLabels = {
    left: options[0] || '매우 나쁨',
    right: options[options.length - 1] || '매우 좋음',
  };
  console.log(options);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onSelect(value.toString());
  };

  return (
    <div>
      <div className="mx-auto my-7 flex w-full items-center justify-between">
        {[1, 2, 3, 4, 5].map((value) => (
          <DoubleCircle
            key={value}
            isSelected={selectedValue === value}
            className={`${
              value === 1 || value === 5
                ? 'h-12 w-12 border-purple-50 tablet:h-20 tablet:w-20'
                : 'h-8 w-8 border-purple-300 tablet:h-10.5 tablet:w-10.5'
            }`}
            onClick={() => handleSelect(value)}
          />
        ))}
      </div>
      <div className="flex justify-between tablet:px-2">
        <div className="font-body3 text-gray-300">{displayLabels.left}</div>
        <div className="font-body3 text-gray-300">{displayLabels.right}</div>
      </div>
    </div>
  );
};

export default LikertScaleForm;
