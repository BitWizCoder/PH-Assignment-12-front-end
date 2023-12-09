import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const AdvertisementCard = ({ data }) => {
  const { image, location, price_range, verification_status } = data;
  return (
    <Card sx={{ maxWidth: 345, p: 1,  }}>
      <CardMedia sx={{ height: 140 }} image={`${image}`} />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component={"div"}
        >{`${location}`}</Typography>
        <Typography
          gutterBottom
          variant="h5"
          component={"div"}
        >{`${price_range}`}</Typography>
        <Typography
          gutterBottom
          variant="h5"
          component={"div"}
        >{`${verification_status}`}</Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained">See Details</Button>
      </CardActions>
    </Card>
  );
};

export default AdvertisementCard;
