import CheckBox from '@/components/@shared/checkbox/CheckBox';

interface ShortAnswerFormProps {
  isRequired: boolean;
  onRequiredChange: (required: boolean) => void;
}

function ShortAnswerForm({ isRequired, onRequiredChange }: ShortAnswerFormProps) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-2">
        <CheckBox checked={isRequired} onChange={onRequiredChange} variant="primary" />
        <span className="font-body3 text-gray-300">필수</span>
      </div>
      <div className="mt-2 flex flex-col gap-6 rounded-[10px] bg-gray-700 px-4 py-3">
        <textarea
          placeholder="응답 필드"
          className="w-full resize-y bg-transparent font-body2 text-gray-50 placeholder:text-gray-200 focus:outline-none"
          disabled
        />
      </div>
    </div>
  );
}

export default ShortAnswerForm;
