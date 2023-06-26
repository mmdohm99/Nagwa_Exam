import Home from "./pages/home";
import ResualtPage from "./pages/Resualt";
import { useEffect } from "react";
import Exam from "./modules/exam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamModule from "./contextApi/examModule";
import axios from "axios";
function App() {


  return (
    <>
      <BrowserRouter>
        <ExamModule>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/resualt" element={<ResualtPage />} />
            <Route path="/exam" element={<Exam />} />
          </Routes>
        </ExamModule>
      </BrowserRouter>
    </>
  );
}

export default App;
