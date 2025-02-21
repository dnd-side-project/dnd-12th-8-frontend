import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import { useCompleteQuiz, useGetProjectDetail } from '@/generated';
import QuizStepController from './QuizStepController';

const Quiz = () => {
  const router = useRouter();
  const { id } = router.query;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const { data: projectDetailData } = useGetProjectDetail(Number(id), {
    query: { enabled: !!Number(id) },
  });

  const { mutate: completeQuizMutate } = useCompleteQuiz({
    mutation: {
      onSuccess: () => {
        void router.push(`/feedback/${id}`);
      },
      onError: (err: any) => {
        const isAlreadyCompleted =
          err.response?.data.errorMessage === '이미 퀴즈를 완료하였습니다.';

        if (isAlreadyCompleted) {
          alert('이미 퀴즈를 제출하였습니다.');
          void router.push(`/feedback/${id}`);
        } else {
          alert('퀴즈 제출에 실패하였습니다.');
          void router.push(`/project/${id}`);
        }
      },
    },
  });

  const { quizzes } = projectDetailData || {};

  const handleSubmit = async () => {
    completeQuizMutate({ projectId: Number(id) });
  };

  return (
    <div className="bg-gray-900 pb-25">
      <div className="relative mb-7 h-[246px] w-full overflow-hidden rounded-[10px] tablet:mb-[40px] tablet:h-[320px] laptop:h-[380px]">
        <Image
          src={projectDetailData?.thumbnailImgUrl || ''}
          alt="thumbnail"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="mx-auto flex flex-col gap-8 laptop:flex-row">
        <div className="flex flex-1 flex-col gap-[40px]">
          <SmallPostCard
            data={{
              title: projectDetailData?.title || '',
              targetJob: projectDetailData?.targetJob || 'ALL',
              logoImageUrl: projectDetailData?.logoImgUrl || '',
              categoryNames: projectDetailData?.platformCategories?.categoryNames || [],
              dueDate: projectDetailData?.dueDate || '',
            }}
            styles={{ container: 'pb-[20px] border-b border-gray-600' }}
          />

          <QuizQuestion
            data={quizzes?.[currentQuestion - 1]}
            order={currentQuestion}
            answer={answers[currentQuestion - 1]}
            onChange={(answer) => {
              setAnswers((prevAnswers) => {
                const newAnswers = [...prevAnswers];
                newAnswers[currentQuestion - 1] = answer;
                return newAnswers;
              });
            }}
          />
        </div>

        <QuizStepController
          currentStep={currentQuestion}
          totalSteps={quizzes?.length || 0}
          onMoveStep={(step) => setCurrentQuestion(step)}
          answers={answers}
          quizzes={quizzes || []}
          onSubmit={() => void handleSubmit()}
        />
      </div>
    </div>
  );
};

export default Quiz;
