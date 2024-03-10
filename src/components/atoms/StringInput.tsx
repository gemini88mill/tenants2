import { Grid, TextField } from "@mui/material";
import { useValidity } from "../hooks/useValidity";

type StringInputProps = {
  label: string;
  value: string;
  width?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: RegExp;
  helperText?: string;
};

/**
 * Input for string values with. if a pattern is provided, it will be used to validate the input. 
 * @param param0 
 * @returns 
 */
export const StringInput = ({
  label,
  value,
  onChange,
  width,
  pattern,
  helperText = " "
}: StringInputProps) => {
  const isInvalid = useValidity(value, pattern ?? /.+/);

  return (
    <Grid item xs={width}>
      <TextField
        error={isInvalid}
        label={label}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        helperText={isInvalid ? helperText : " "}
      />
    </Grid>
  );
};
