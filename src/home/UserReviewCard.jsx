import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const UserReviewCard = ({ data }) => {
  const { property_title, reviewer_name, reviewer_image, review_description } =
    data;
  return (
    <Card sx={{ maxWidth: 345, p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar alt={`${reviewer_name}`} src={`${reviewer_image}`} />
        <Typography
          gutterBottom
          variant="span"
        >{`${reviewer_name}`}</Typography>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h6" component={"div"}>
          {" "}
          Title: {`${property_title}`}
        </Typography>
        <Typography gutterBottom variant="h6" component={"div"}>
          {" "}
          Review: {`${review_description}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserReviewCard;
