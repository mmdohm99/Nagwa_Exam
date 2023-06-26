import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "../Button";
import IocnHolder from "../IconHolder";
import trueLogo from "../../assets/true.png";
import wronge from "../../assets/false.png";

import "./style.css";
import axios from "axios";
// @ts-ignore
export default function RadioButtonsGroup({
  btns,
  question,
  submited,
  setSubmited,
  setAnswers,
  questionNumber,
  setQuestionNumber,
  setSelectedAns,
  // @ts-ignore
  selectedAns,
}: any) {
  const [value, setValue] = React.useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = async () => {
    if (questionNumber == 9) {
      setQuestionNumber((prev: any) => prev + 1);
    }
    setSubmited(true);
    await axios
      .post("/exam/resualt", {
        word: question,
        a: value,
      })
      .then((response) => {
        setAnswers((prev: any) => [...prev, response?.data?.mark]);
        setSelectedAns(() => response?.data?.mark);
      });
  };

  return (
    <FormControl>
      {submited && (
        <h1 className={submited ? "show" : "hidden"}>
          {selectedAns === "" ? (
            ""
          ) : selectedAns ? (
            <>
              {" "}
              <IocnHolder src={trueLogo} /> Right Answer
            </>
          ) : (
            <>
              {" "}
              <IocnHolder src={wronge} /> Wronge Answer
            </>
          )}{" "}
        </h1>
      )}
      <RadioGroup value={value} onChange={handleChange}>
        {btns?.map((ele: string) => (
          <FormControlLabel
            disabled={submited}
            value={ele}
            control={
              <Radio
                sx={{
                  color: "#9d85a1",
                  "&.Mui-checked": {
                    color: "#6a1b9a",
                  },
                }}
              />
            }
            label={ele}
          />
        ))}
      </RadioGroup>

      <Button
        width={"400px"}
        text={"Submit"}
        handleClick={handleSubmit}
        disable={questionNumber == 10 || submited ? true : false}
      />
    </FormControl>
  );
}
