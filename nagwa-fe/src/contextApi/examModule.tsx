import React, { useState, useEffect, createContext, useCallback } from "react";
import axios from "axios";

// @ts-ignore
export const ExamContextModule = createContext();

export default function ExamModule({ children }: any) {
  const [exam, setExam] = useState<any[]>([]);

  useEffect(() => {
    async function getExam() {
      const response = await axios.get("/exam");
      setExam(response?.data);
    }
    getExam();
  }, []);
  return (
    <ExamContextModule.Provider
      value={{
        // @ts-ignore
        exam,
      }}
    >
      {children}
    </ExamContextModule.Provider>
  );
}
