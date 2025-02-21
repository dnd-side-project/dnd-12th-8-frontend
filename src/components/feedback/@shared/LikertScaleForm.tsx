import { useState } from 'react';
import DoubleCircle from '@/components/@shared/double-circle/DoubleCircle';

interface LikertScaleFormProps {
  onSelect: (answer: string | string[]) => void;
}

const LikertScaleForm = ({ onSelect }: LikertScaleFormProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const options = [
    { value: 1, label: '매우 만족' },
    { value: 5, label: '매우 불만족' },
  ];

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
                ? 'h-12 w-12 tablet:h-20 tablet:w-20 border-purple-50'
                : 'h-8 w-8 tablet:h-10.5 tablet:w-10.5 border-purple-300'
            }`}
            onClick={() => handleSelect(value)}
          />
        ))}
      </div>
      <div className="flex justify-between tablet:px-2">
        <div className="font-body3 text-gray-300">{options[0].label}</div>
        <div className="font-body3 text-gray-300">{options[1].label}</div>
      </div>
    </div>
  );
};

export default LikertScaleForm;
