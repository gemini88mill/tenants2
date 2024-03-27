import { Settings } from "@mui/icons-material";
import {
  Box,
  Divider,
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
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Tenants" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Owners" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Properties" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
