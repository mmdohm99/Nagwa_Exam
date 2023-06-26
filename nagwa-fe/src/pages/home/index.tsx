import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome To Nagwa Exams</h1>
      <button
        onClick={() => {
          navigate(`/exam`);
        }}
      >
        Start Exam{" "}
      </button>
    </div>
  );
};

export default Home;
