import { Grid } from "@mui/material";
import MyAddedPropertiesCard from "./MyAddedPropertiesCard";
import axios from "axios";
import { useEffect, useState } from "react";

const MyAddedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/api/properties").then((res) => setProperties(res.data));
  }, []);

  if (!properties) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      spacing={2}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {properties.map((data, index) => (
        <Grid key={index} item sm={12} md={6} lg={4}>
          <MyAddedPropertiesCard key={index} data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyAddedProperties;
