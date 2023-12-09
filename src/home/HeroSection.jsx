import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ mb: 2 }}>
          Real estate platform for buying and selling properties all over the world, offering affordable prices.
          </Typography>
          <Typography variant="h5">
          Connecting Buyers and Sellers Worldwide: Your Destination for Affordable Real Estate Solutions
          </Typography>
          <Button sx={{ mt: 3 }} variant="contained">
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={"img"}
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{ maxWidth: "100%" }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

<img src="" alt="" />;

export default HeroSection;
