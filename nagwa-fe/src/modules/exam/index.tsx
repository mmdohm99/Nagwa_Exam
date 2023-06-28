import React, { useEffect, useContext, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import { ExamContextModule } from "../../contextApi/examModule";
import RadioButtonsGroup from "../../components/RadioBtns";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import "./style.css";
const arr = ["noun", "verb", "adjective", "adverb"];
interface ele {
  word: string;
  pos: string;
}

const Exam = () => {
  const {
    examQuestions,
    next,
    questionNumber,
    submited,
    setSubmited,
    setAnswers,
    setExamQuestions,
    setExam,
    setQuestionNumber,
    setSelectedAns,
    selectedAns,
  } = useContext(ExamContextModule);
  useEffect(() => {
    async function getExam() {
      const response = await axios.get("/exam");

      const localData = JSON.parse(localStorage.getItem("exam") as string);

      if (!localData || localData?.length == "0") {
        setExam(response?.data);

        setExamQuestions(response?.data?.map((ele: ele) => ele.word));
      } else {
        setExamQuestions(localData);
      }
    }
    getExam();
  }, [setExam, setExamQuestions]);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("exam") as string);

    if (!localData || localData?.length == "0") {
      localStorage.setItem("exam", JSON.stringify(examQuestions));
    }
    //
  }, [examQuestions]);

  return (
    <>
      <Container className="container">
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
        />
        <Button
          width={"200px"}
          text={"Next"}
          disable={!submited}
          handleClick={next}
        />
      </Container>
    </>
  );
};

export default Exam;
