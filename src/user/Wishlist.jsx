import { Grid } from "@mui/material";
import WishlistCard from "./WishlistCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Wishlist = () => {
  const [wishlistData, setWishilistData] = useState();

  useEffect(() => {
    axios
      .get(`/api/wishlist/`)
      .then((res) => setWishilistData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(wishlistData);

  if (!wishlistData) {
    return <p>Loading...</p>;
  }

  return (
    <Grid
      spacing={2}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {wishlistData.wishlist?.map((data, index) => (
        <Grid key={index} item sm={12} md={6} lg={4}>
          <WishlistCard key={index} data={data} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Wishlist;
