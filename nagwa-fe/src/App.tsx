import Home from "./pages/home";
import Exam from "./modules/exam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamModule from "./contextApi/examModule";
function App() {
  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const response = await axios.post("/exam", { score: 90 });
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUser();
  // }, []);
  return (
    <>
      <ExamModule>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/exam" element={<Exam />} />
          </Routes>
        </BrowserRouter>
      </ExamModule>
    </>
  );
}

export default App;
