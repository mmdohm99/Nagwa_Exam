export type ExamContextState = {
  exam: string[];
  setExam: (arr: string[]) => void;
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
