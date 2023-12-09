import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MyReviewsCard from "./MyReviewsCard";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const MyReviews = () => {
  // const { review } = useContext(ApiDataContext);
  const { user } = useContext(AuthContext);

  const [review, setReview] = useState();

  useEffect(() => {
    axios
      .get(`/api/reviews/email/${user?.email}`)
      .then((res) => setReview(res.data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  if (!review) {
    return <div>Loading...</div>;
  }
  // console.log(review.reviews);

  return (
    <Grid
      spacing={2}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {review.map((data, index) => (
        <Grid key={index} item sm={12} md={6} lg={4}>
          <MyReviewsCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyReviews;
