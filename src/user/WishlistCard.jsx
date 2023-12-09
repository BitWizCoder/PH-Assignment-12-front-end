import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const WishlistCard = ({ data }) => {
  const {
    image,
    title,
    location,
    agent: { name, image: agentImage },
    verification_status,
    price_range,
    _id,
  } = data;

  const handleDelete = () => {
    axios
      .delete(`/api/wishlist/${_id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // console.log(_id);
  };

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
        <Typography color="text.secondary">{verification_status}</Typography>
        <Typography color="text.secondary">{price_range}</Typography>

        <Box component={"div"} sx={{ display: "flex", gap: 4, mt: 3 }}>
          <Button
            component={Link}
            to={`/dashboard/wishlist-offer/${_id}`}
            variant="outlined"
          >
            Make an Offer
          </Button>
          <Button variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WishlistCard;
