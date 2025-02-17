import { useState } from 'react';
import { useRouter } from 'next/router';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import FeedbackStepController from '@/components/feedback/FeedbackStepController';
import feedbackFormRequests from '@/constants/fake-data/feedbackForm.json';

const FeedbackPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('🚀 ~ FeedbackPage ~ id:', id);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9; // 전체 스텝 수

  const moveStep = (step: number) => {
    setCurrentStep(step);
  };

  const feedbackForm = feedbackFormRequests;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 p-4 laptop:flex-row">
        {/* 메인 콘텐츠 영역 */}
        <div className="flex-1">
          <div className="mb-8">
            <SmallPostCard
              title={feedbackForm.title}
              targetJob={feedbackForm.targetJob}
              thumbnailImgUrl={feedbackForm.thumbnailImgUrl}
              categoryNames={feedbackForm.categoryNames}
            />
          </div>

          {/* 피드백 폼 내용 */}
          <div className="min-h-[500px] rounded-lg bg-gray-800 p-6">
            <h2 className="font-title1 text-gray-50">{`질문 ${currentStep}`}</h2>
            {/* 여기에 실제 폼 내용이 들어갈 예정 */}
          </div>
        </div>

        {/* 사이드바 영역 - 데스크톱에서만 표시 */}

        <FeedbackStepController
          currentStep={currentStep}
          totalSteps={totalSteps}
          onMoveStep={moveStep}
        />
      </div>
    </div>
  );
};

export default FeedbackPage;
