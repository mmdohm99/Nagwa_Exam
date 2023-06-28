import React, { useState, createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ExamContextState } from "./types";
const contextDefaultValues: ExamContextState = {
  exam: [],
  setExam: () => [],
  next: () => "",
  submited: false,
  setSubmited: () => false,
  answers: [],
  setAnswers: () => [],
  examQuestions: [],
  setExamQuestions: () => [],
  selectedAns: "",
  setSelectedAns: () => "",
  questionNumber: 0,
  setQuestionNumber: () => 0,
};
export const ExamContextModule =
  createContext<ExamContextState>(contextDefaultValues);
export default function ExamModule({ children }: any) {
  const navigate = useNavigate();
  const [exam, setExam] = useState<any[]>([]);
  const [examQuestions, setExamQuestions] = useState<any[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [submited, setSubmited] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [selectedAns, setSelectedAns] = React.useState("");

  const next = () => {
    if (questionNumber === 9) {
      navigate(`/resualt`);
    } else {
      setQuestionNumber((prev) => (prev < 10 ? prev + 1 : prev));

      setSubmited(false);
      setSelectedAns("");
    }
  };

  return (
    <ExamContextModule.Provider
      value={{
        exam,
        setExam,
        next,
        setSubmited,
        submited,
        answers,
        setAnswers,
        examQuestions,
        setExamQuestions,
        selectedAns,
        setSelectedAns,
        questionNumber,
        setQuestionNumber,
      }}
    >
      {children}
    </ExamContextModule.Provider>
  );
}
