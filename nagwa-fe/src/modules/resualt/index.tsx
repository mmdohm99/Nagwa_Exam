import { useContext } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import useFetch from "../../utlis/useFetch";

const Resualt = () => {
  const navigate = useNavigate();
  const { setSubmited, setAnswers, setQuestionNumber, answers } =
    useContext(ExamContextModule);

  const trueAnswers = answers?.filter((a: any) => a === true);
  const score = trueAnswers?.length * 10;

  const { response, loading } = useFetch({
    method: "post",
    url: `/exam`,
    data: { score },
  });

  const handleAgianSame = () => {
    navigate(`/exam`);
    setAnswers([]);
    setSubmited(false);
    setQuestionNumber(0);
  };
  const handleAgianNew = () => {
    localStorage.removeItem("exam");
    setAnswers([]);
    setSubmited(false);
    setQuestionNumber(0);
    navigate(`/exam`);
  };
  const handleHome = () => {
    localStorage.removeItem("exam");
    setAnswers([]);
    setSubmited(false);
    setQuestionNumber(0);
    navigate(`/`);
  };
  return (
    <>
      <div>{response?.data?.resualt}</div>
      <Button text={"AgianSame"} handleClick={handleAgianSame} />
      <Button text={"AgianNew"} handleClick={handleAgianNew} />
      <Button text={"Home"} handleClick={handleHome} />
    </>
  );
};

export default Resualt;
