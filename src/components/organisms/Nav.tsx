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
import { DashViews } from "./Dashboard";

type NavProps = {
  bannerText: string;
  navWidth?: string;
  onNavItemClick: React.Dispatch<React.SetStateAction<DashViews>>;
};

export const Nav = ({bannerText, navWidth, onNavItemClick}: NavProps) => {
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
            <ListItemButton onClick={() => onNavItemClick((prev) => prev === "dashboard" ? "settings" : "dashboard")}>
              <ListItemText primary={bannerText} />
              <ListItemIcon><Settings /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={() => onNavItemClick("tenants")}>
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
