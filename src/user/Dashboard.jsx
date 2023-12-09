import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { CustomListItem } from "../utils/DashBoardNav";
import {
  AccountBox,
  AddHomeWork,
  CommentSharp,
  Favorite,
  Home,
  House,
  SpaceDashboard,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  // const { user  } = useContext(ApiDataContext);

  const user = localStorage.getItem("userRole");

  if (!user) {
    return <h1>Loading...</h1>;
  }

  // const userRole = user?.Users[1]?.userRole;

  const userRole = user;

  // console.log(userRole);

  const listItemsData = [];

  if (userRole === "User") {
    listItemsData.push(
      { icon: <Home />, primaryText: "Home", route: "/dashboard" },
      {
        icon: <AccountBox />,
        primaryText: "My Profile",
        route: "/dashboard/profile",
      },
      {
        icon: <Favorite />,
        primaryText: "Wishlist",
        route: "/dashboard/wishlist",
      },
      {
        icon: <House />,
        primaryText: "Properties Bought",
        route: "/dashboard/properties-bought",
      },
      {
        icon: <CommentSharp />,
        primaryText: "My Reviews",
        route: "/dashboard/my-reviews",
      }
    );
  } else if (userRole === "Agent") {
    listItemsData.push(
      {
        icon: <Home />,
        primaryText: "Home",
        route: "/dashboard",
      },
      {
        icon: <AccountBox />,
        primaryText: "Agent Profile",
        route: "/dashboard/profile",
      },
      {
        icon: <AccountBox />,
        primaryText: "Add Property",
        route: "/dashboard/add-property",
      },
      {
        icon: <AccountBox />,
        primaryText: "My added Properties",
        route: "/dashboard/my-added-properties",
      },
      {
        icon: <AccountBox />,
        primaryText: "My sold Properties",
        route: "/dashboard/my-sold-properties",
      },
      {
        icon: <AccountBox />,
        primaryText: "Requested Properties",
        route: "/dashboard/requested-properties",
      }
    );
  } else {
    listItemsData.push(
      {
        icon: <Home />,
        primaryText: "Admin Home",
        route: "/dashboard",
      },
      {
        icon: <AccountBox />,
        primaryText: "Admin Profile",
        route: "/dashboard/profile",
      },
      {
        icon: <AccountBox />,
        primaryText: "Manage Properties",
        route: "/dashboard/manage-properties",
      },
      {
        icon: <AccountBox />,
        primaryText: "Manage users",
        route: "/dashboard/manage-users",
      },
      {
        icon: <AccountBox />,
        primaryText: "Manage reviews",
        route: "/dashboard/manage-reviews",
      }
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Manage your account
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <SpaceDashboard sx={{ mr: 3 }} />
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
        <Divider />
        {
          <List>
            {listItemsData.map((item, index) => (
              <CustomListItem
                key={index} // Ensure unique keys for each item
                icon={item.icon}
                primaryText={item.primaryText}
                open={open}
                route={item.route}
              />
            ))}
          </List>
        }
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }} component="div">
            <ListItemButton
              component={NavLink}
              to={"/"}
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
                <AddHomeWork />
              </ListItemIcon>
              <ListItemText
                primary={"Back to Home"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
