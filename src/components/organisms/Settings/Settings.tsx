import { Box, Grid, Slide, Stack } from "@mui/material";
import { StringInput } from "../../atoms/StringInput";
import { DashViews } from "../Dashboard";

type SettingsProps = {
  navWidth?: number;
  view: DashViews;
};

export const Settings = ({ view }: SettingsProps) => {
  return view === "settings" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box height={"90vh"}>
        <Stack spacing={2}>
          <h1>Settings</h1>
          <Grid
            container
            spacing={2}
            sx={{ alignContent: "center"}}
          >
            <Grid item xs={7}>
              <h3>Change Password</h3>
            </Grid>
            <Grid item xs={5}>
              <Stack spacing={2}>
                <StringInput label="Old Password" value="password" onChange={(e) => console.log(e.target.value)}/>
                <StringInput label="New Password" value="password" onChange={(e) => console.log(e.target.value)}/>
                <StringInput label="Confirm Password" value="password" onChange={(e) => console.log(e.target.value)}/>
              </Stack>
            </Grid>
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
