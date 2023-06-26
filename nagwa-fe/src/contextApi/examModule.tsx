import React, { useState, useEffect, createContext, useCallback } from "react";

import { useNavigate } from "react-router-dom";
// @ts-ignore
export const ExamContextModule = createContext();

export default function ExamModule({ children }: any) {
  const navigate = useNavigate();
  const [exam, setExam] = useState<any[]>([]);
  const [examQuestions, setExamQuestions] = useState<any[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [submited, setSubmited] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [selectedAns, setSelectedAns] = React.useState("");
  console.log(questionNumber);
  const next = () => {
    if (questionNumber === 10) {
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
        // @ts-ignore
        exam,
        // @ts-ignore
        examQuestions,
        questionNumber,
        next,
        submited,
        setSubmited,
        setAnswers,
        setExamQuestions,
        setExam,
        setSelectedAns,
        selectedAns,
        setQuestionNumber,
      }}
    >
      {children}
    </ExamContextModule.Provider>
  );
}
