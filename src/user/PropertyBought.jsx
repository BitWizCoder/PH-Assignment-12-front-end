import { useEffect, useState } from "react";
import PropertyBoughtCard from "./PropertyBoughtCard";
import { Grid } from "@mui/material";
import axios from "axios";

const PropertyBought = () => {
  // const { propertyData } = useContext(ApiDataContext);

  const [propertyData, setPropertyData] = useState();

  useEffect(() => {
    axios
      .get(`/api/bought`)
      .then((res) => setPropertyData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(propertyData);

  // Check if propertyData is not yet available (null or undefined)
  if (!propertyData) {
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
      {propertyData.map((data, index) => (
        <Grid key={index} item sm={12} md={6} lg={4}>
          <PropertyBoughtCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyBought;
