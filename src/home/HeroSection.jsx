import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quos repellendus tempore praesentium qui inventore!
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
