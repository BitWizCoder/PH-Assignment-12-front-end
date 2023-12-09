import { Outlet } from "react-router-dom";
import Dashboard from "../user/Dashboard";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Dashboard />
      <Box component="main" sx={{ ml: 33, mt: 12 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
