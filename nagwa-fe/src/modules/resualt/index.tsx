import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ExamContextModule } from "../../contextApi/examModule";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
const Resualt = () => {
  const [resualt, setReasualt] = useState();
  const navigate = useNavigate();
  const { setSubmited, setAnswers, setQuestionNumber, answers } =
    useContext(ExamContextModule);

  const trueAnswers = answers?.filter((a: any) => a === true);
  const score = trueAnswers?.length * 10;

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.post("/exam", { score });
        setReasualt(response?.data?.resualt);
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
      <div>{resualt}</div>
      <Button text={"Agian"} handleClick={handleAgian} />
    </>
  );
};

export default Resualt;
