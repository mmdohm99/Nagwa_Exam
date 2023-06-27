import { useContext } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import "./style.css";
const ProgressBar = () => {
  const { questionNumber } = useContext(ExamContextModule);

  return (
    <div
      className="container"
      style={{
        width: `${
          (questionNumber === 10 ? questionNumber : questionNumber + 1) * 9.68
        }%`,
      }}
    >
      {(questionNumber === 10 ? questionNumber : questionNumber + 1) * 10}%
    </div>
  );
};

export default ProgressBar;
