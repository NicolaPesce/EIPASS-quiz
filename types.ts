
export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  hint: string;
  explanation: string;
}

export interface QuizState {
  status: 'start' | 'playing' | 'finished';
  currentQuestionIndex: number;
  score: number;
  answers: boolean[]; // true if correct, false if wrong
}

export interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  totalQuestions: number;
  currentQuestionNumber: number;
}
