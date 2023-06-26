import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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
            <>Right Answer</>
          ) : (
            "Wronge Answer"
          )}{" "}
        </h1>
      )}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        {btns?.map((ele: string) => (
          <FormControlLabel
            disabled={submited}
            value={ele}
            control={<Radio />}
            label={ele}
          />
        ))}
      </RadioGroup>
      <IocnHolder src={trueLogo} />
      <IocnHolder src={wronge} />
      <button
        disabled={questionNumber == 10 || submited ? true : false}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </FormControl>
  );
}
