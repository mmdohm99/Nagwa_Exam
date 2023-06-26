import React, { useEffect, useContext, useState } from "react";

import axios from "axios";
import { ExamContextModule } from "../../contextApi/examModule";
import RadioButtonsGroup from "../../components/RadioBtns";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
const arr = ["noun", "verb", "adjective", "adverb"];

const Exam = () => {
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
    setSelectedAns,
    // @ts-ignore
    selectedAns,
  } = useContext(ExamContextModule);
  useEffect(() => {
    async function getExam() {
      const response = await axios.get("/exam");

      // @ts-ignore
      const localData = JSON.parse(localStorage.getItem("exam"));

      if (!localData || localData?.length == "0") {
        setExam(response?.data);
        // @ts-ignore
        setExamQuestions(response?.data?.map((ele) => ele.word));
      } else {
        setExamQuestions(localData);
      }
    }
    getExam();
  }, [setExam, setExamQuestions]);
  useEffect(() => {
    // @ts-ignore
    const localData = JSON.parse(localStorage.getItem("exam"));

    // @ts-ignore
    if (!localData || localData?.length == "0") {
      localStorage.setItem("exam", JSON.stringify(examQuestions));
    }
    //
  }, [examQuestions]);

  return (
    <div>
      <ProgressBar />
      <h1>{examQuestions[questionNumber]}</h1>
      <RadioButtonsGroup
        setSelectedAns={setSelectedAns}
        selectedAns={selectedAns}
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
        setAnswers={setAnswers}
        submited={submited}
        setSubmited={setSubmited}
        question={examQuestions[questionNumber] as string}
        btns={arr as [string]}
        // setstudentAnswer={setstudentAnswer}
      />
      <Button
        width={"200px"}
        text={"Next"}
        disable={!submited}
        handleClick={next}
      />
    </div>
  );
};

export default Exam;
