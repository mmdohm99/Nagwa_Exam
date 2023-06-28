import Home from "./pages/home";
import ResualtPage from "./pages/resualt";
import { useEffect } from "react";
import ExamPage from "./pages/exam";
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
            <Route path="/exam" element={<ExamPage />} />
          </Routes>
        </ExamModule>
      </BrowserRouter>
    </>
  );
}

export default App;
