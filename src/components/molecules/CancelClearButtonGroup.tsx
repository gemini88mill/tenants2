import { Add, Backspace, Cancel } from "@mui/icons-material";
import { Button, ButtonGroup, Grid } from "@mui/material";

type CancelClearButtonGroupProps = {
  cancelAction: () => void;
  deleteAction?: () => void;
  addAction?: () => void;
  showDelete?: boolean;
  showAdd?: boolean;
};

export const CancelClearButtonGroup = ({
  cancelAction,
  deleteAction,
  addAction,
  showDelete,
  showAdd,
}: CancelClearButtonGroupProps) => {
  return (
    <Grid item xs={12}>
      <ButtonGroup size="small" sx={{ float: "right" }}>
        {showAdd && (
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={addAction}
            startIcon={<Add />}
          >
            Add
          </Button>
        )}
        <Button
          variant="outlined"
          size="small"
          color="warning"
          onClick={cancelAction}
          startIcon={<Backspace />}
        >
          Clear
        </Button>
        {showDelete && (
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={deleteAction}
            startIcon={<Cancel />}
          >
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Grid>
  );
};
