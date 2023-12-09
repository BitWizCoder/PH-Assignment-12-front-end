import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Grid, TextField } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const UpdateProperty = () => {
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!property) {
    return <div>loading...</div>;
  }

  console.log(property);

  const {
    image,
    title,
    location,
    // agent: { name, image: agentImage },
    verified,
    price_range_lowest,
    price_range_highest,
    _id,
  } = property.property;

  //   console.log(typeof property.property);

  //   console.log(id);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const location = form.location.value;
    const price_range_lowest = form.price_range_lowest.value;
    const price_range_highest = form.price_range_highest.value;
    const img = form.image.value;

    const inputData = {
      title,
      location,
      image: img,
      price_range_lowest,
      price_range_highest,
    };

    axios
      .put(`/api/properties/${id}`, inputData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <form onSubmit={handleUpdate}>
        <Grid item>
          <TextField
            label="Property title"
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: 300 }}
            name="title"
            defaultValue={title}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Property location"
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: 300 }}
            name="location"
            defaultValue={location}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Property Image"
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: 300 }}
            name="image"
            defaultValue={image}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Agent name"
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: 300 }}
            name="name"
            defaultValue={user?.displayName}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Agent email"
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: 300 }}
            name="email"
            defaultValue={user?.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid
          container
          gap={3}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item>
            <TextField
              label="Price (lowest)"
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ width: 140 }}
              name="price_range_lowest"
              defaultValue={price_range_lowest}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Price (highest)"
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ width: 140 }}
              name="price_range_highest"
              defaultValue={price_range_highest}
            />
          </Grid>
        </Grid>

        <Button sx={{ width: 300, mt: 2 }} variant="contained" type="submit">
          Update Property
        </Button>
      </form>
    </Grid>
  );
};

export default UpdateProperty;
