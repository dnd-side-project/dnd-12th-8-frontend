import { useState } from 'react';
import type { FeedbackFormResponse, FeedbackFormResponseType } from '@/generated';

interface FeedbackFormRequest {
  feedbackQuestions: FeedbackFormResponse[];
}

interface FeedbackAnswer {
  questionId: string;
  questionType: FeedbackFormResponseType;
  selectedOption?: string;
  responseText?: string;
}

export const useFeedbackForm = (
  feedbackFormRequest: FeedbackFormRequest = { feedbackQuestions: [] },
) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<FeedbackAnswer[]>([]);

  const totalSteps = feedbackFormRequest?.feedbackQuestions?.length ?? 0;
  console.log('🚀 ~ answers:', answers);
  const currentQuestion = feedbackFormRequest?.feedbackQuestions?.[currentStep - 1];
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.questionId) || {
    selectedOption: '',
    responseText: '',
  };
  const hasCurrentAnswer = Boolean(currentAnswer?.selectedOption || currentAnswer?.responseText);

  const handleAnswerChange = (answer: string | string[]) => {
    if (!currentQuestion) return;

    setAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (a) => a.questionId === currentQuestion.questionId,
      );

      let formattedAnswer: FeedbackAnswer = {
        questionId: currentQuestion.questionId as string,
        questionType: currentQuestion.type as FeedbackFormResponseType,
      };

      switch (currentQuestion.type) {
        case 'MULTIPLE_CHOICE':
          formattedAnswer = {
            ...formattedAnswer,
            selectedOption: String(Number(answer) - 1),
          };
          break;

        case 'LIKERT_SCALE': {
          const score = Number(answer) - 1;
          formattedAnswer = {
            ...formattedAnswer,
            selectedOption: String(score),
            responseText: currentQuestion.options?.[score] || '',
          };
          break;
        }

        case 'SHORT_ANSWER':
          formattedAnswer = {
            ...formattedAnswer,
            responseText: answer as string,
          };
          break;

        case 'AB_TEST': {
          if (Array.isArray(answer)) {
            const [selectedOption, responseText] = answer;
            formattedAnswer = {
              ...formattedAnswer,
              selectedOption,
              responseText,
            };
          }
          break;
        }
      }

      if (existingAnswerIndex !== -1) {
        const newAnswers = [...prev];
        newAnswers[existingAnswerIndex] = formattedAnswer;
        return newAnswers;
      }

      return [...prev, formattedAnswer];
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
