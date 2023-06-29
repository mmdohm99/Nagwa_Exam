import { useContext, useState } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import Container from "@mui/material/Container";
import RadioButtonsGroup from "../../components/radioBtns";
import ProgressBar from "../../components/progressBar";
import Button from "../../components/button";
import "./style.css";
import useFetch from "../../utlis/useFetch";
import localStorageExam from "../../utlis/localStorageExam";
import axios from "axios";
const arr = ["noun", "verb", "adjective", "adverb"];

const Exam = () => {
  const [value, setValue] = useState("");
  const {
    examQuestions,
    next,
    questionNumber,
    submited,
    setSubmited,
    setAnswers,
    setQuestionNumber,
    setSelectedAns,
    selectedAns,
  } = useContext(ExamContextModule);
  const { response, loading } = useFetch({
    method: "get",
    url: `/exam`,
  });
  localStorageExam(response, loading);
  const handleSubmit = async () => {
    setSubmited(true);
    await axios
      .post("/exam/resualt", {
        word: examQuestions[questionNumber],
        a: value,
      })
      .then((response) => {
        // @ts-ignore
        setAnswers((prev: any) => [...prev, response?.data?.mark] as any);
        // @ts-ignore
        setSelectedAns(() => response?.data?.mark as any);
      });
  };

  return (
    <>
      <Container className="container">
        <ProgressBar />
        <h1>{examQuestions[questionNumber]}</h1>
        <RadioButtonsGroup
          submited={submited}
          btns={arr as [string]}
          setValue={setValue}
          handleSubmit={handleSubmit}
          selectedAns={selectedAns}
          value={value}
        />

        <Button
          width={"200px"}
          text={questionNumber === 9 ? "Finish" : "Next"}
          disable={!submited}
          handleClick={next}
        />
      </Container>
    </>
  );
};

export default Exam;
