import { Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

const MyReviewsCard = ({ data }) => {
  const {
    property_title,
    reviewer_name,
    review_date,
    review_description,
    _id,
  } = data;

  const handleDelete = () => {
    axios
      .delete(`/api/reviews/${_id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {property_title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          <b>Agent Name:</b> {reviewer_name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          <b>Review Time:</b> {review_date}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          <b>Review:</b> {review_description}
        </Typography>
        <Button variant="outlined" onClick={handleDelete}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyReviewsCard;
