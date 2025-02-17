import { useState } from 'react';
import Step from './Step';

const UPLOAD_STEPS = [
  { id: 1, label: '상세' },
  { id: 2, label: '질문 폼 제작' },
  { id: 3, label: ' 확인' },
];

interface ProgressBarProps {
  currentStep: number;
}

function ProgressBar({ currentStep }: ProgressBarProps) {
  const [completedStep, setCompletedStep] = useState<number[]>([1]);

  console.log('setCurrentStep', setCompletedStep);

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-gray-800 px-9 py-7">
      <div className="relative h-8 w-full">
        <div className="absolute z-10 flex w-full items-center justify-between">
          {UPLOAD_STEPS.map((step) => {
            const isCompleted = completedStep.includes(step.id);
            const isCurrent = step.id === currentStep;
            const type = isCurrent ? 'current' : isCompleted ? 'completed' : 'default';

            return <Step key={step.id} type={type} step={step.id} />;
          })}
        </div>
        <div className="absolute top-1/2 left-1 h-1 w-[95%] bg-purple-50"></div>
      </div>
      <div className="flex items-center justify-between text-gray-50">
        {UPLOAD_STEPS.map((step) => (
          <p key={step.id} className="font-body3-regular">
            {step.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
