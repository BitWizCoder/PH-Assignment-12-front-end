import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WishlistOffer = () => {
  const { id } = useParams();
  const [wishListData, setWishilistData] = useState();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    axios
      .get(`api/wishlist/${id}`)
      .then((res) => setWishilistData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!wishListData) {
    return <p>loading...</p>;
  }

  const {
    image,
    title,
    location,
    agent: { name, image: agentImage },
    verification_status,
    price_range,
    _id,
    email,
    byer_name,
  } = wishListData;

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = e.target.amount.value;

    const boughtData = {
      title,
      image,
      location,
      verification_status,
      agent: {
        name,
        image: agentImage,
      },
      email,
      byer_name,
      amount,
      status: "pending",
      propertyID: _id,
    };

    axios
      .post(`/api/bought`, boughtData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container sx={{ mb: 10 }}>
        <Grid item container direction={"column"} gap={2} alignItems={"center"}>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            size="small"
            margin="normal"
            defaultValue={title}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            size="small"
            margin="normal"
            defaultValue={location}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Agent Name"
            variant="outlined"
            size="small"
            margin="normal"
            defaultValue={name}
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Buyer Name"
            variant="outlined"
            size="small"
            margin="normal"
            defaultValue={byer_name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Buyer Email"
            variant="outlined"
            size="small"
            margin="normal"
            defaultValue={email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="buying date"
            variant="outlined"
            size="small"
            margin="normal"
            defaultValue={today}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Offer an Amount"
            variant="outlined"
            size="small"
            margin="normal"
            name="amount"
          />

          <Button
            variant="contained"
            disableElevation
            sx={{ maxWidth: 400, mt: 2 }}
            type="submit"
          >
            Offer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default WishlistOffer;
