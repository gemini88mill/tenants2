import { Box } from "@mui/material";

type SettingsProps = {
  navWidth?: number;
};

export const Settings = ({navWidth}: SettingsProps) => {
  return (
    <Box width={navWidth}>
      <h1>Settings</h1>
      <p>Settings go here</p>
    </Box>
  );
};