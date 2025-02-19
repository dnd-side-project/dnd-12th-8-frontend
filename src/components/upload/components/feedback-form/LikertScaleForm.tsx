import { useState } from 'react';

interface LikertScaleFormProps {
  onChange: (options: string[]) => void;
}

function LikertScaleForm({ onChange }: LikertScaleFormProps) {
  const [leftLabel, setLeftLabel] = useState('');
  const [rightLabel, setRightLabel] = useState('');

  const handleLabelChange = (newLeftLabel: string, newRightLabel: string) => {
    const options = [newLeftLabel, '-', '-', '-', newRightLabel];
    onChange(options);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`flex rounded-full border-2 ${
              index === 1 || index === 5
                ? 'h-14 w-14 border-purple-50 tablet:h-20 tablet:w-20'
                : index === 2 || index === 4
                  ? 'h-12 w-12 border-purple-200 tablet:h-15 tablet:w-15'
                  : 'h-10 w-10 border-purple-300 tablet:h-10.5 tablet:w-10.5'
            }`}
          ></div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="w-auto rounded-lg bg-gray-600 p-4">
          <input
            type="text"
            value={leftLabel}
            onChange={(e) => {
              setLeftLabel(e.target.value);
              handleLabelChange(e.target.value, rightLabel);
            }}
            className="w-full bg-transparent font-body3 text-gray-50 focus:outline-none"
            placeholder="왼쪽 라벨"
          />
        </div>
        <div className="mx-5 h-[2px] w-[10px] rounded-full bg-gray-200 tablet:mx-8 tablet:w-[24px]" />
        <div className="w-auto rounded-lg bg-gray-600 px-6 py-4">
          <input
            type="text"
            value={rightLabel}
            onChange={(e) => {
              setRightLabel(e.target.value);
              handleLabelChange(leftLabel, e.target.value);
            }}
            className="w-full bg-transparent text-right font-body3 text-gray-50 focus:outline-none"
            placeholder="오른쪽 라벨"
          />
        </div>
      </div>
    </div>
  );
}

export default LikertScaleForm;
