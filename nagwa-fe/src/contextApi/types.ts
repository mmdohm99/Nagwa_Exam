export type ExamContextState = {

  next: () => void;
  submited: boolean;
  setSubmited: (sub: boolean) => void;
  answers: string[];
  setAnswers: (answers: []) => void;
  examQuestions: string[];
  setExamQuestions: (examQ: string[]) => void;
  selectedAns: string;
  setSelectedAns: (value: string) => void;
  questionNumber: number;
  setQuestionNumber: (oldQuestion: number) => void;
};
