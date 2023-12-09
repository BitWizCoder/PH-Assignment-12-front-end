import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345, p: 1 }}>
          <Box component={Link} to={"/dashboard/profile"}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></CardMedia>

            <CardContent>
              <Typography>My Profile</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345, p: 1 }}>
          <Box component={Link} to={"/dashboard/wishlist"}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></CardMedia>

            <CardContent>
              <Typography>Wishlist</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345, p: 1 }}>
          <Box component={Link} to={"/dashboard/properties-bought"}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></CardMedia>

            <CardContent>
              <Typography>PropertyBought</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345, p: 1 }}>
          <Box component={Link} to={"/dashboard/my-reviews"}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></CardMedia>

            <CardContent>
              <Typography>MyReviews</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
