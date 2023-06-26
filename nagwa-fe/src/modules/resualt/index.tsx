import React, { useEffect, useContext, useState } from "react";

import axios from "axios";
import { ExamContextModule } from "../../contextApi/examModule";
import { useNavigate } from "react-router-dom";
const Resualt = () => {
  const navigate = useNavigate();
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
    // @ts-ignore
    setExamQuestions,
    // @ts-ignore
    setExam,
    // @ts-ignore
    setQuestionNumber,
    // @ts-ignore
    answers,
  } = useContext(ExamContextModule);

  const trueAnswers = answers?.filter((a: any) => a === true);
  const score = trueAnswers?.length * 10;
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.post("/exam", { score });
      } catch (error) {}
    }
    getUser();
  }, [score]);
  const handleAgian = () => {
    navigate(`/exam`);
    setAnswers([]);
    setSubmited(false);
    setQuestionNumber(0);
  };
  return (
    <>
      <div>Reeeesualt</div>
      <button onClick={handleAgian}>Agian</button>
    </>
  );
};

export default Resualt;
