import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";

import "./style.css";
import { Container } from "@mui/material";

export default function RadioButtonsGroup({
  btns,
  submited,

  selectedAns,
  setValue,
  value,
}: any) {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <RadioGroup value={value} onChange={handleChange}>
        <Grid
          width={"100%"}
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        >
          {btns?.map((ele: string, i: number) => (
            <Grid key={i} item xs={6}>
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
    </Container>
  );
}
