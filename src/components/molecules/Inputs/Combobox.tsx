import { Autocomplete, Box, Grid, TextField } from "@mui/material";

export interface ComboBoxBaseType {
  name: string;
  svg?: string;
} 

type ComboboxProps<T extends ComboBoxBaseType> = {
  width?: number;
  value: T | null;
  setValue: (newValue: T | null) => void;
  options: T[];
  label: string;
};

export const Combobox = <T extends ComboBoxBaseType >({ width, value, setValue, options, label}: ComboboxProps<T>) => {

  return (
    <Grid item xs={width}>
      <Autocomplete
        id="country-select-demo"
        isOptionEqualToValue={(option, value) => option.name === value?.name}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        fullWidth
        options={options}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`${option.svg} 2x`}
              src={option.svg}
              alt=""
            />
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Grid>
  );
};
