import { useState } from 'react';
import { useRouter } from 'next/router';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import FeedbackQuestion from '@/components/feedback/FeedbackQuestion';
import FeedbackStepController from '@/components/feedback/FeedbackStepController';
import { useGetProjectDetail, useGetFeedbackForms, useSaveFeedbackForm } from '@/generated';
import { useFeedbackForm } from '@/hooks/useFeedbackForm';

const FeedbackPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutate: submitFeedback } = useSaveFeedbackForm();

  // feedbackForm API 호출로 변경
  const { data: feedbackForms } = useGetFeedbackForms(Number(id));
  const { data: projectDetail } = useGetProjectDetail(Number(id));

  const {
    currentStep,
    currentQuestion,
    currentAnswer,
    hasCurrentAnswer,
    totalSteps,
    answers,
    handleAnswerChange,
    handleStepChange,
  } = useFeedbackForm({ feedbackQuestions: feedbackForms ?? [] });

  const handleSubmit = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      if (answers.length !== totalSteps) {
        alert('모든 질문에 답변해주세요.');
        return;
      }

      const formattedAnswers = answers.map((answer) => ({
        questionId: String(answer.questionId),
        questionType: answer.questionType,
        selectedOption: Array.isArray(answer.answer) ? answer.answer[0] : answer.answer,
        responseText: Array.isArray(answer.answer) ? '' : answer.answer,
      }));

      const submitData = {
        projectId: Number(id),
        answers: formattedAnswers,
      };
      console.log(submitData);

      submitFeedback(
        { data: submitData },
        {
          onSuccess: () => {
            console.log(formattedAnswers);
            alert('피드백 제출이 완료되었습니다.');
            void router.push('/main');
          },
        },
      );
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

  if (!projectDetail) return null;

  return (
    <div className="bg-gray-900 pb-25">
      <div className="mx-auto flex flex-col gap-8 p-4 laptop:flex-row">
        <div className="flex-1">
          <div className="mb-8">
            <SmallPostCard
              data={{
                title: projectDetail?.title ?? '',
                targetJob: projectDetail?.targetJob ?? '',
                logoImageUrl: projectDetail?.thumbnailImgUrl ?? '',
                categoryNames: projectDetail?.platformCategories?.categoryNames ?? ['도서'],
              }}
            />
          </div>

          <FeedbackQuestion
            questionText={currentQuestion?.question ?? ''}
            questionType={currentQuestion?.type ?? 'SHORT_ANSWER'}
            options={currentQuestion?.options}
            abImageAUrl={currentQuestion?.abImageAUrl}
            abImageBUrl={currentQuestion?.abImageBUrl}
            questionId={currentStep}
            answer={currentAnswer}
            onAnswerChange={handleAnswerChange}
          />
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
