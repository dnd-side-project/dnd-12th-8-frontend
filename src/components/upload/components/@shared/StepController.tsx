import Button from '@/components/@shared/button/Button';

// step1 : 다음단계 -> step2 이동
// step2 : 이전단계 -> step1 이동 / 다음단계 -> step3 이동
// step3 : 이전단계 -> step2 이동 / 업로드

interface StepControllerProps {
  currentStep: number;
  moveStep: (step: number) => void;
}

function StepController({ currentStep, moveStep }: StepControllerProps) {
  const handleMoveStep = (direction: 'pre' | 'next') => () => {
    moveStep(direction === 'pre' ? currentStep - 1 : currentStep + 1);
  };

  const handleUpload = () => {
    console.log('upload');
  };

  return (
    <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-center gap-2 border-t-[1px] border-gray-700 bg-gray-900 px-4 pt-3 pb-7 tablet:mx-auto laptop:relative laptop:border-none laptop:p-0">
      <div className="latop:w-full flex w-full items-center justify-between gap-2 tablet:max-w-[800px] laptop:flex-col-reverse">
        <Button
          variant="lined"
          className="latop:max-w-none h-[48px] max-w-[96px] font-body3 tablet:h-[60px] tablet:font-body2 laptop:w-full laptop:max-w-none"
        >
          임시저장
        </Button>

        <div className="flex w-full max-w-[493px] items-center gap-2 tablet:justify-end">
          {currentStep !== 1 && (
            <Button
              variant="lined"
              className="h-[48px] tablet:h-[60px]"
              onClick={handleMoveStep('pre')}
            >
              이전단계
            </Button>
          )}
          {currentStep === 3 ? (
            <Button variant="primary" className="h-[48px] tablet:h-[60px]" onClick={handleUpload}>
              업로드
            </Button>
          ) : (
            <Button
              variant="primary"
              className="h-[48px] tablet:h-[60px]"
              onClick={handleMoveStep('next')}
            >
              다음단계
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepController;
