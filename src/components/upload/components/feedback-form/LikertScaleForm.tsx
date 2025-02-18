import { useState } from 'react';

function LikertScaleForm() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const options = [
    { value: 1, label: '매우 나쁨' },
    { value: 2, label: '나쁨' },
    { value: 3, label: '보통' },
    { value: 4, label: '좋음' },
    { value: 5, label: '매우 좋음' },
  ];

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        {options.map((option) => (
          <div
            key={option.value}
            className={`flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 ${
              selectedValue === option.value
                ? 'border-purple-400 bg-purple-400 text-white'
                : 'border-gray-500 text-gray-300'
            }`}
            onClick={() => setSelectedValue(option.value)}
          >
            {option.value}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between px-2 font-body3 text-gray-300">
        <span>매우 나쁨</span>
        <span>매우 좋음</span>
      </div>
    </div>
  );
}

export default LikertScaleForm;
