import { Add } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";

type AddButtonProps = {
  onClick: () => void;
};

export const AddButton = ({onClick}: AddButtonProps) => {
  return (
    <Grid container item xs={12} justifyContent="flex-end" marginBottom={2}>
      <Button variant="contained" color="success" onClick={onClick} startIcon={<Add />}>
        Contact
      </Button>
    </Grid>
  );
};
