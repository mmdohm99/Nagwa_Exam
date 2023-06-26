import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <button onClick={handleClick}>Start Exam </button>
    </div>
  );
};

export default Home;
