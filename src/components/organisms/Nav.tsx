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
};

export const Nav = ({bannerText}: NavProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          bgcolor: "background.primary",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
            bgcolor: "background.primary",
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary={bannerText} />
              <ListItemIcon><Settings /></ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
