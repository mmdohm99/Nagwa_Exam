import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// @ts-ignore
export default function RadioButtonsGroup({ btns, setstudentAnswer }) {
  const [value, setValue] = React.useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: any) => {
    setstudentAnswer(value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        {btns?.map((ele: string) => (
          <FormControlLabel
            disabled={true}
            value={ele}
            control={<Radio />}
            label={ele}
          />
        ))}
      </RadioGroup>
      <button onClick={handleSubmit}>Submit</button>
    </FormControl>
  );
}
