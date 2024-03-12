import { Settings } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type NavProps = {
  bannerText: string;
  navWidth?: string;
  onSettingsClick?: () => void;
};

export const Nav = ({bannerText, navWidth, onSettingsClick}: NavProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          bgcolor: "background.primary",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: navWidth,
            boxSizing: "border-box",
            bgcolor: "background.primary",
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton onClick={onSettingsClick}>
              <ListItemText primary={bannerText} />
              <ListItemIcon><Settings /></ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
