import { useState } from 'react';
import ProgressBar from './components/@shared/ProgessBar/ProgressBar';
import StepController from './components/@shared/StepController';
import FeedbackFormSection from './components/feedback-form/FeedbackFormSection';

function UploadFormStep2() {
  const [currentStep, setCurrentStep] = useState(2);

  const moveStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="mb-50 flex flex-col gap-[72px] overflow-auto laptop:flex-row laptop:gap-5">
      <div className="flex flex-1 flex-col gap-[18px]">
        <FeedbackFormSection />
      </div>
      <div className="flex w-full flex-col gap-5 laptop:max-w-[493px]">
        <ProgressBar currentStep={currentStep} />
        <StepController currentStep={currentStep} moveStep={moveStep} />
      </div>
    </div>
  );
}

export default UploadFormStep2;
