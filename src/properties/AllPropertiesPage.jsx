import { Container, Grid, Typography } from "@mui/material";
import PropertyCard from "./PropertyCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllPropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/properties/status/verified`)
      .then((res) => setProperties(res.data));
  }, []);

  return (
    <Container maxWidth={"xl"} sx={{ mt: 15 }}>
      <Typography align="center" variant="h4" sx={{ my: 5 }}>
        All properties
      </Typography>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {properties.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ mb: 10 }}>
            <PropertyCard data={data} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllPropertiesPage;
