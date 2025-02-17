import { useState } from 'react';
import { useRouter } from 'next/router';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import FeedbackQuestion from '@/components/feedback/FeedbackQuestion';
import FeedbackStepController from '@/components/feedback/FeedbackStepController';
import feedbackFormRequests from '@/constants/fake-data/feedbackForm.json';
import { useFeedbackForm } from '@/hooks/useFeedbackForm';
import type { FeedbackSubmitData } from '@/types/schema';

const FeedbackPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const feedbackFormRequest = feedbackFormRequests.feedbackFormRequests[0];

  const {
    currentStep,
    currentQuestion,
    currentAnswer,
    hasCurrentAnswer,
    totalSteps,
    answers,
    handleAnswerChange,
    handleStepChange,
  } = useFeedbackForm(feedbackFormRequest);

  const handleSubmit = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      if (answers.length !== totalSteps) {
        alert('모든 질문에 답변해주세요.');
        return;
      }

      const submitData: FeedbackSubmitData = {
        feedbackId: id as string,
        answers,
      };

      console.log('제출 데이터:', submitData);
      await router.push('/main');
    } catch (error) {
      console.error('피드백 제출 오류:', error);
      alert('피드백 제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onStepChange = (step: number) => {
    if (step > totalSteps) {
      void handleSubmit();
      return;
    }
    handleStepChange(step);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 p-4 laptop:flex-row">
        <div className="flex-1">
          <div className="mb-8">
            <SmallPostCard
              title={feedbackFormRequests.title}
              targetJob={feedbackFormRequests.targetJob}
              thumbnailImgUrl={feedbackFormRequests.thumbnailImgUrl}
              categoryNames={feedbackFormRequests.categoryNames}
            />
          </div>

          <div className="min-h-[500px] rounded-lg bg-gray-800 p-6">
            <h2 className="font-title1 text-gray-50">{`질문 ${currentStep}`}</h2>
            <FeedbackQuestion
              {...currentQuestion}
              questionId={currentStep}
              answer={currentAnswer}
              onAnswerChange={handleAnswerChange}
            />
          </div>
        </div>

        <FeedbackStepController
          currentStep={currentStep}
          totalSteps={totalSteps}
          onMoveStep={onStepChange}
          hasCurrentAnswer={hasCurrentAnswer}
        />
      </div>
    </div>
  );
};

export default FeedbackPage;
