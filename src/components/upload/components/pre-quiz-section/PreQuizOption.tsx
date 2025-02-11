import { QuestionDefaultIcon } from '@/assets/icons';

function PreQuizOption() {
  return (
    <div className="flex w-full items-center justify-between rounded-[10px] bg-gray-600 px-5 py-3">
      <input
        type="text"
        placeholder="입력하세요."
        maxLength={20}
        className="flex-1 font-body3-regular text-gray-50 placeholder:text-gray-200"
      />
      <QuestionDefaultIcon />
    </div>
  );
}

export default PreQuizOption;
