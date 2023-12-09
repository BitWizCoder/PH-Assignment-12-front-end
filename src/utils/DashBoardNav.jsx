import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export const CustomListItem = ({ icon, primaryText, open, route }) => {
  const location = useLocation();

  return (
    <ListItem disablePadding sx={{ display: "block" }} component="div">
      <ListItemButton
        component={NavLink}
        to={route}
        selected={route === location.pathname}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={primaryText} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
