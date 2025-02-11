import { useState } from 'react';
import { CloseIcon, PlusIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';
import PreQuizQuestion from './PreQuizQuestion';

interface PreQuizQuestion {
  id: number;
  question: string;
  options: { id: number; label: string }[];
  answer: { id: number; label: string };
}

const INITIAL_PRE_QUIZ_QUESTION = {
  question: '',
  options: [],
  answer: { id: 0, label: '' },
};

function PreQuizSection() {
  const [preQuiz, setPreQuiz] = useState<PreQuizQuestion[]>([]);

  const handleDeletePreQuiz = () => {
    setPreQuiz([]);
  };

  const handleAddPreQuiz = () => {
    setPreQuiz(
      Array(4)
        .fill(0)
        .map((_, index) => ({
          ...INITIAL_PRE_QUIZ_QUESTION,
          id: index,
        })),
    );
  };

  return (
    <div>
      {!preQuiz.length ? (
        <div className="flex items-center justify-between rounded-[20px] bg-gray-800 p-10">
          <div className="flex flex-col gap-2">
            <p className="font-subtitle text-gray-50">사전퀴즈 만들기</p>
            <p className="font-body2-regular text-gray-100">
              실제 유저만을 모으고 싶다면 사전퀴즈를 통해 검증 절차를 만들 수 있어요!
            </p>
          </div>
          <button onClick={handleAddPreQuiz}>
            <Icon icon={PlusIcon} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-7 rounded-[20px] bg-gray-800 px-6 py-10">
          <div className="flex items-center justify-between">
            <p className="font-title2 text-gray-50">사전퀴즈</p>
            <button onClick={handleDeletePreQuiz}>
              <Icon icon={CloseIcon} />
            </button>
          </div>
          {preQuiz.map((question) => (
            <PreQuizQuestion key={question.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PreQuizSection;
