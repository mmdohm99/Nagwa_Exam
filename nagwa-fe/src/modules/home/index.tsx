import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("exam");
  }, []);
  const handleClick = () => {
    navigate(`/exam`);
  };
  return (
    <div>
      <h1>Welcome To Nagwa Exams</h1>
      <Button handleClick={handleClick} text={"Take the exam"} />
    </div>
  );
};

export default Home;
