import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const AddProperty = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>loading...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const location = form.location.value;
    const name = form.name.value;
    const email = form.email.value;
    const price_range_lowest = form.price_range_lowest.value;
    const price_range_highest = form.price_range_highest.value;
    const img = form.image.value;

    const inputData = {
      title,
      location,
      image: img,
      agent: {
        name,
        email,
        image: user.photoURL,
      },
      price_range_lowest,
      price_range_highest,
      verification_status: "pending",
      sold: false,
    };

    axios
      .post("/api/properties", inputData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <form onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            label="Property title"
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: 300 }}
            name="title"
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
            />
          </Grid>
        </Grid>

        <Button sx={{ width: 300, mt: 2 }} variant="contained" type="submit">
          Add Property
        </Button>
      </form>
    </Grid>
  );
};

export default AddProperty;
