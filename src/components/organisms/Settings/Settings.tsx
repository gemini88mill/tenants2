import { Box, Grid, Slide, Stack } from "@mui/material";
import { PasswordReset } from "../../molecules/Inputs/PasswordReset";
import { DashViews } from "../Dashboard";

type SettingsProps = {
  navWidth?: number;
  view: DashViews;
};

//todo: add snackbar for success/failure

export const Settings = ({ view }: SettingsProps) => {
  return view === "settings" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box height={"90vh"}>
        <Stack spacing={2}>
          <h1>Settings</h1>
          <PasswordReset />
          <Grid container>
            <h3>Change Email</h3>
          </Grid>
          <Grid container>
            <h3>Change Phone</h3>
          </Grid>
        </Stack>
      </Box>
    </Slide>
  ) : null;
};
