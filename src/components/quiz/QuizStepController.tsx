import { useRouter } from 'next/router';
import { IncorrectIcon } from '@/assets/icons';
import { CorrectIcon } from '@/assets/icons';
import Button from '@/components/@shared/button/Button';
import TextChip from '@/components/@shared/chip/TextChip';
import { QuizResponse } from '@/generated';
import { cn } from '@/utils/cn';

interface QuizStepControllerProps {
  currentStep: number;
  totalSteps: number;
  onMoveStep: (step: number) => void;
  onSubmit: () => void;
  answers: string[];
  quizzes: QuizResponse[];
}

export default function QuizStepController({
  currentStep,
  totalSteps,
  onMoveStep,
  onSubmit,
  answers,
  quizzes,
}: QuizStepControllerProps) {
  const router = useRouter();
  const { id } = router.query;

  const hasCurrentAnswer = answers[currentStep - 1] !== undefined;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full border-t-[1px] border-gray-700 bg-gray-900 p-4 laptop:relative laptop:max-w-[350px] laptop:border-none laptop:p-0 desktop:max-w-[493px]">
      <div className="mx-auto flex w-full items-center justify-between gap-2 tablet:max-w-[800px] laptop:flex-col laptop:items-stretch">
        <div className="flex w-auto flex-col gap-2 pr-2 font-subtitle text-gray-50 laptop:hidden">
          {currentStep}/{totalSteps} 문항 완료
          <div className="flex items-center gap-1">
            {[...Array(totalSteps)].map((_, index) => {
              const isCorrect = quizzes[index].answer === answers[index];

              return (
                <>
                  {answers[index] && index + 1 !== currentStep ? (
                    isCorrect ? (
                      <CorrectIcon width={20} height={20} />
                    ) : (
                      <IncorrectIcon width={20} height={20} />
                    )
                  ) : (
                    <div className="h-5 w-5 rounded-full bg-gray-700" />
                  )}
                </>
              );
            })}
          </div>
        </div>

        {isLastStep ? (
          <Button onClick={onSubmit} disabled={!hasCurrentAnswer}>
            제출하기
          </Button>
        ) : (
          <Button onClick={() => onMoveStep(currentStep + 1)} disabled={!hasCurrentAnswer}>
            다음으로
          </Button>
        )}

        <Button
          variant="lined"
          size="lg"
          className="hidden px-4 laptop:block laptop:w-auto"
          onClick={() => void router.push(`/project/${id}`)}
        >
          나가기
        </Button>
      </div>
      <div className="mt-5 hidden w-full flex-col gap-2 laptop:block">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={cn(
              'mb-2 rounded-[10px] border-2 bg-gray-700',
              index + 1 === currentStep ? 'border-purple-400' : 'border-gray-700',
            )}
          >
            <div className="flex h-[75px] items-center justify-between gap-2 px-6 py-4">
              <span className="flex-1 font-body2-regular text-gray-300">
                {index + 1}번{' '}
                {answers[index] && index + 1 !== currentStep && (
                  <span className="ml-2 overflow-ellipsis text-gray-50">{answers[index]}</span>
                )}
              </span>
              {answers[index] &&
                index + 1 !== currentStep &&
                (quizzes[index].answer === answers[index] ? (
                  <CorrectIcon width={40} height={40} />
                ) : (
                  <IncorrectIcon width={40} height={40} />
                ))}
              {index + 1 === currentStep && (
                <div className="flex items-center justify-center">
                  <TextChip label="진행중" className="bg-purple-500" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
