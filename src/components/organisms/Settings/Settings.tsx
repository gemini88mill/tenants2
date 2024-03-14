import { Box, Grid, Slide, Stack } from "@mui/material";
import { DashViews } from "../Dashboard";

type SettingsProps = {
  navWidth?: number;
  view: DashViews;
};

export const Settings = ({ navWidth, view }: SettingsProps) => {
  return view === "settings" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box display={"flex"} height={"90vh"} marginLeft={`${navWidth}`}>
        <Stack spacing={2}>
          <h1>Settings</h1>
          <Grid container item>
            <h3>Change Password</h3>
          </Grid>
          <Grid container item>
            <h3>Change Email</h3>
          </Grid>
          <Grid container item>
            <h3>Change Phone</h3>
          </Grid>
        </Stack>
      </Box>
    </Slide>
  ) : null;
};
