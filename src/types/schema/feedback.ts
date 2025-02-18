export interface FeedbackAnswer {
  questionId: number;
  questionType: string;
  answer: string | string[];
}

export interface FeedbackSubmitData {
  feedbackId: string | string[];
  answers: FeedbackAnswer[];
}

export interface FeedbackQuestion {
  questionText: string;
  questionType: string;
  options?: string[];
  abImageAUrl?: string;
  abImageBUrl?: string;
}

export interface FeedbackFormRequest {
  feedbackQuestions: FeedbackQuestion[];
}
