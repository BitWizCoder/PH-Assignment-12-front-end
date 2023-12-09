import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const PropertyCard = ({ data }) => {
  if (!data) {
    return <p>Loading..</p>;
  }

  const {
    image,
    title,
    location,
    agent: { name, image: agentImage },
    verification_status,
    price_range_lowest,
    price_range_highest,
    _id,
  } = data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Box
          component={"div"}
          sx={{ display: "flex", gap: 1, alignItems: "center", mt: 2 }}
        >
          <Avatar sx={{ width: 40, height: 40 }} alt={name} src={agentImage} />
          <Typography color="text.secondary">{name}</Typography>
        </Box>
        <Typography color="text.secondary">
          Status: {verification_status}
        </Typography>
        <Typography color="text.secondary">
          Lowest: {price_range_lowest}
        </Typography>
        <Typography color="text.secondary">
          Highest: {price_range_highest}
        </Typography>

        <Box component={"div"} sx={{ display: "flex", gap: 4, mt: 3 }}>
          <Button variant="outlined" component={Link} to={`/properties/${_id}`}>
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
