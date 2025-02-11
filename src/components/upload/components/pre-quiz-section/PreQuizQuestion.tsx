import PreQuizOption from './PreQuizOption';

function PreQuizQuestion() {
  return (
    <div className="flex flex-col gap-6 rounded-[10px] bg-gray-700 px-4.5 py-6">
      <input
        type="text"
        placeholder="질문을 입력해주세요"
        className="font-body2 text-gray-50 placeholder:text-gray-200"
      />
      <div className="grid grid-cols-1 gap-3 desktop:grid-cols-2">
        <PreQuizOption />
        <PreQuizOption />
        <PreQuizOption />
        <PreQuizOption />
      </div>
    </div>
  );
}

export default PreQuizQuestion;
