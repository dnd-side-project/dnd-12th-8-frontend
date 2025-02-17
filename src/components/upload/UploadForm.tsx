import { useState } from 'react';
import ProgressBar from './components/@shared/ProgessBar/ProgressBar';
import StepController from './components/@shared/StepController';
import PreQuizSection from './components/pre-quiz-section/PreQuizSection';
import ServiceBasicInfoSection from './components/service-basic-info-section/ServiceBasicInfoSection';
import ServiceExtraInfoSection from './components/ServiceExtraInfoSection';
import ThumbnailSection from './components/ThumbnailSection';

function UploadForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const moveStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="mb-50 flex flex-col gap-[72px] overflow-auto laptop:flex-row laptop:gap-5">
      <div className="flex flex-1 flex-col gap-[18px]">
        <ThumbnailSection />
        <ServiceExtraInfoSection />
        <PreQuizSection />
      </div>
      <div className="flex w-full flex-col gap-5 laptop:max-w-[493px]">
        <ProgressBar currentStep={currentStep} />
        <StepController currentStep={currentStep} moveStep={moveStep} />
        <ServiceBasicInfoSection />
      </div>
    </div>
  );
}

export default UploadForm;
