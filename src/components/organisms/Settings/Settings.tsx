import { Box, Slide } from "@mui/material";
import { DashViews } from "../Dashboard";

type SettingsProps = {
  navWidth?: number;
  view: DashViews;
};

export const Settings = ({navWidth, view}: SettingsProps) => {
  return view === "settings" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box width={navWidth}>
        <h1>Settings</h1>
        <p>Settings go here</p>
      </Box>
    </Slide>
  ) : null;    
}

