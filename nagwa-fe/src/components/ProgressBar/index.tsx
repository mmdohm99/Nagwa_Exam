import React from "react";
import { useContext, useState } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import "./style.css";
const ProgressBar = () => {
  const {
    // @ts-ignore
    examQuestions,
    // @ts-ignore
    next,
    // @ts-ignore
    questionNumber,
    // @ts-ignore
    submited,
    // @ts-ignore
    setSubmited,
    // @ts-ignore
    setAnswers,
  } = useContext(ExamContextModule);

  return (
    <div
      className="container"
      style={{
        width: `${
          (questionNumber === 10 ? questionNumber : questionNumber + 1) * 9.88
        }%`,
      }}
    >
      {(questionNumber === 10 ? questionNumber : questionNumber + 1) * 10}%
    </div>
  );
};

export default ProgressBar;
