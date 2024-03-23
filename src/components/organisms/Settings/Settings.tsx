import { Alert, AlertColor, Box, Grid, Slide, Snackbar, Stack } from "@mui/material";
import { PasswordReset } from "../../molecules/Inputs/PasswordReset";
import { DashViews } from "../Dashboard";
import { useState } from "react";

type SettingsProps = {
  navWidth?: number;
  view: DashViews;
};

//todo: add snackbar for success/failure

export const Settings = ({ view }: SettingsProps) => {
  const [snackBarState, setSnackbarState] = useState<{type: AlertColor, message: string}>({
    type: "success",
    message: "",
  });

  return view === "settings" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box height={"90vh"}>
        <Stack spacing={2}>
          <h1>Settings</h1>
          <PasswordReset setNotification={setSnackbarState} />
          <Grid container>
            <h3>Change Email</h3>
          </Grid>
          <Grid container>
            <h3>Change Phone</h3>
          </Grid>
        </Stack>
        <Snackbar
          open={snackBarState.message !== ""}
          autoHideDuration={6000}
          
          onClose={() => setSnackbarState((prev) => ({ ...prev, message: "" }))}
        >
          <Alert
            onClose={() =>
              setSnackbarState((prev) => ({ ...prev, message: "" }))
            }
            severity={snackBarState.type}
            variant="filled"
            sx={{ width: "100%" }}
          >{snackBarState.message}</Alert>
        </Snackbar>
      </Box>
    </Slide>
  ) : null;
};
