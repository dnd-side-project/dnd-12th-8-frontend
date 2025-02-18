import Button from '@/components/@shared/button/Button';
import TextChip from '@/components/@shared/chip/TextChip';
import { cn } from '@/utils/cn';

interface FeedbackStepControllerProps {
  currentStep: number;
  totalSteps: number;
  onMoveStep: (step: number) => void;
  hasCurrentAnswer: boolean;
}

export default function FeedbackStepController({
  currentStep,
  totalSteps,
  onMoveStep,
  hasCurrentAnswer,
}: FeedbackStepControllerProps) {
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full border-t-[1px] border-gray-700 bg-gray-900 px-4 py-4 laptop:relative laptop:w-[360px] laptop:border-none">
      <div className="mx-auto flex w-full items-center justify-between gap-2 tablet:max-w-[800px] laptop:flex-col laptop:items-stretch">
        <div className="flex w-auto flex-col gap-2 pr-2 font-subtitle text-gray-50 laptop:hidden">
          {currentStep}/{totalSteps} 문항 완료
          <div className="grid grid-cols-10 gap-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={cn(
                  'h-3 w-3 rounded-full',
                  index + 1 <= currentStep ? 'bg-purple-400' : 'bg-gray-700',
                )}
              />
            ))}
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={() => onMoveStep(currentStep + 1)}
          disabled={!hasCurrentAnswer}
          className={`h-[48px] max-w-55 px-4 tablet:max-w-100 laptop:h-[60px] ${
            !hasCurrentAnswer ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          {isLastStep ? '제출하기' : '다음으로'}
        </Button>

        <Button variant="lined" size="lg" className="hidden px-4 laptop:block laptop:w-auto">
          나가기
        </Button>
      </div>
      <div className="mt-5 hidden flex-col gap-2 laptop:block">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={cn(
              'mb-2 rounded-[10px] border-2 bg-gray-700',
              index + 1 === currentStep ? 'border-purple-400' : 'border-gray-700',
            )}
          >
            <div className="flex h-[75px] items-center justify-between px-6 py-4">
              <span className="text-gray-50">{index + 1}번</span>
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
