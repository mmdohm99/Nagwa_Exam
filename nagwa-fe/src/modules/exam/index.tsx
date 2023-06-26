import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import RadioButtonsGroup from "../../components/RadioBtns";
const Exam = () => {
  const arr = ["noun", "verb", "adjective", "adverb"];
  // @ts-ignore
  const { exam } = useContext(ExamContextModule);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [studentAnswer, setstudentAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  useEffect(() => {
    setCorrectAnswer(exam[questionNumber]?.pos);
  }, [questionNumber, exam]);
  console.log(correctAnswer);
  console.log(studentAnswer === correctAnswer ? true : false);
  const next = () => {
    setQuestionNumber((prev) => (prev < 9 ? prev + 1 : prev));
  };

  return (
    <div>
      <h1>{exam && exam[questionNumber]?.word}</h1>
      <RadioButtonsGroup
        btns={arr as [string]}
        setstudentAnswer={setstudentAnswer}
      />
      <button disabled={true} onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Exam;
