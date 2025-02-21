import { useState } from 'react';
import type { FeedbackFormResponse, FeedbackFormResponseType } from '@/generated';

interface FeedbackFormRequest {
  feedbackQuestions: FeedbackFormResponse[];
}

interface FeedbackAnswer {
  questionId: string;
  questionType: FeedbackFormResponseType;
  answer: string | string[];
}

export const useFeedbackForm = (
  feedbackFormRequest: FeedbackFormRequest = { feedbackQuestions: [] },
) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<FeedbackAnswer[]>([]);

  const totalSteps = feedbackFormRequest?.feedbackQuestions?.length ?? 0;
  console.log('🚀 ~ answers:', answers);
  const currentQuestion = feedbackFormRequest?.feedbackQuestions?.[currentStep - 1];
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.questionId)?.answer;
  const hasCurrentAnswer = Boolean(currentAnswer);

  const handleAnswerChange = (answer: string | string[]) => {
    if (!currentQuestion) return;

    setAnswers((prev) => {
      const newAnswer: FeedbackAnswer = {
        questionId: currentQuestion.questionId as string,
        questionType: currentQuestion.type as FeedbackFormResponseType,
        answer,
      };

      return [...prev.filter((a) => a.questionId !== currentQuestion.questionId), newAnswer];
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
