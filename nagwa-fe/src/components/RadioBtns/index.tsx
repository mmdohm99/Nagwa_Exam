import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import Button from "../Button";
import IocnHolder from "../IconHolder";
import trueLogo from "../../assets/true.png";
import wronge from "../../assets/false.png";

import "./style.css";
import axios from "axios";
import { Container } from "@mui/material";

export default function RadioButtonsGroup({
  btns,
  question,
  submited,
  setSubmited,
  setAnswers,
  questionNumber,
  setQuestionNumber,
  setSelectedAns,

  selectedAns,
}: any) {
  const [value, setValue] = React.useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = async () => {
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
    <Container>
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
        <Grid
          width={"100%"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 24 }}
        >
          {btns?.map((ele: string) => (
            <Grid item xs={6}>
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
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
      <Button
        width={"100%"}
        text={"Submit"}
        handleClick={handleSubmit}
        disable={submited}
      />
    </Container>
  );
}
