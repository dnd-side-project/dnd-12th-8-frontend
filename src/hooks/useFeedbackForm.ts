import { useState } from 'react';
import type { FeedbackAnswer, FeedbackFormRequest } from '@/types/schema';

export const useFeedbackForm = (feedbackFormRequest: FeedbackFormRequest) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<FeedbackAnswer[]>([]);

  const totalSteps = feedbackFormRequest.feedbackQuestions.length;
  const currentQuestion = feedbackFormRequest.feedbackQuestions[currentStep - 1];
  const currentAnswer = answers.find((a) => a.questionId === currentStep)?.answer;
  const hasCurrentAnswer = Boolean(currentAnswer);

  const handleAnswerChange = (answer: string | string[]) => {
    setAnswers((prev) => {
      const newAnswer = {
        questionId: currentStep,
        questionType: currentQuestion.questionType,
        answer,
      };

      return [...prev.filter((a) => a.questionId !== currentStep), newAnswer];
    });
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return {
    currentStep,
    currentQuestion,
    currentAnswer,
    hasCurrentAnswer,
    totalSteps,
    answers,
    handleAnswerChange,
    handleStepChange,
  };
};
