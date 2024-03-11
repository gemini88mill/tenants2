import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const Nav = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          bgcolor: "background.default",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
