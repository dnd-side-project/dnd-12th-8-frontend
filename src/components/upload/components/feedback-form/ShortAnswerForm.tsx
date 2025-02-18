import { useState } from 'react';

function ShortAnswerForm() {
  const [placeholder] = useState('답변을 입력해주세요');

  return (
    <div className="mt-2 flex flex-col gap-6 rounded-[10px] bg-gray-600 px-4 py-3">
      <textarea
        placeholder={placeholder}
        className="min-h-[100px] w-full resize-y bg-transparent font-body2 text-gray-50 placeholder:text-gray-200 focus:outline-none"
      />
    </div>
  );
}

export default ShortAnswerForm;
