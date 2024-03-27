import { Box, Slide, Stack } from "@mui/material";
import { PasswordReset } from "../../molecules/Inputs/PasswordReset";
import { DashViews } from "../Dashboard";
import { EmailReset } from "./EmailReset";
import { PhoneReset } from "./PhoneReset";

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
          <EmailReset />
          <PhoneReset />
        </Stack>
      </Box>
    </Slide>
  ) : null;
};
