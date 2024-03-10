import { Grid, TextField } from "@mui/material";

type DateInputProps = {
  value: string;
  setValue: (e: string) => void;
  width?: number;
  label: string;
};

export const DateInput = ({ value, setValue, width, label }: DateInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    console.log(new Date(value).getTime());

    //check if value is valid date if not return empty string
    isNaN(Date.parse(value)) ? setValue("") : setValue(value);
  };

  return (
    <Grid item xs={width ?? 12}>
      <TextField
        type="date"
        variant="outlined"
        label={label}
        focused
        fullWidth
        value={value}
        onChange={onChangeHandler}
      />
    </Grid>
  );
};
