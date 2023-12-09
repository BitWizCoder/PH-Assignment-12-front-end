import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Modal, ModalClose, Sheet, Textarea } from "@mui/joy";
import { AuthContext } from "../context/AuthContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PropertyDetails = () => {
  const [data, setData] = useState();
  const [rev, setRev] = useState([]);
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const today = new Date().toISOString().split("T")[0];

  // Modal
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // get properties
    axios
      .get(`api/properties/${id}`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));

    // get reviews
    axios
      .get(`api/reviews/property/${id}`)
      .then((res) => {
        setRev(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!data || !rev) {
    return <p>Loading..</p>;
  }

  // const {
  //   image,
  //   title,
  //   location,
  //   agent: { name, image: agentImage },
  //   verification_status,
  //   price_range_lowest,
  //   price_range_highest,
  //   _id,
  //   review,
  // } = data;

  const handleReview = (e) => {
    e.preventDefault();
    const reviewText = e.target.review.value;

    const updatedData = {
      reviewer_name: user.displayName,
      reviewer_image: user.photoURL,
      agent_name: name,
      review_description: reviewText,
      property_title: title,
      review_date: today,
      propertyID: _id,
      reviewer_email: user.email,
    };

    axios
      .post(`/api/reviews/`, updatedData)
      .then((res) => {
        console.log(res.data);
        setRev([...rev, updatedData]);
      })
      .catch((err) => console.log(err));
    setOpen(false);
  };

  const handleWishlist = () => {
    const { email, displayName } = user;

    const wishlistData = {
      image,
      title,
      location,
      agent: { name, image: agentImage },
      verification_status,
      price_range_lowest,
      price_range_highest,
      byer_name: displayName,
      // new fields
      email: email,
      propertyID: _id,
    };

    axios
      .post(`http://localhost:3000/api/wishlist`, wishlistData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {data ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 10,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 550 }}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={data?.image}
                title="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.location}
                </Typography>
                <Box
                  component={"div"}
                  sx={{ display: "flex", gap: 1, alignItems: "center", mt: 2 }}
                >
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    alt={data?.agent?.name}
                    src={data?.agent?.image}
                  />
                  <Typography color="text.secondary">{data?.name}</Typography>
                </Box>
                <Typography color="text.secondary">
                  Status: {data?.verification_status}
                </Typography>
                <Typography color="text.secondary">
                  Lowest: {data?.price_range_lowest}
                </Typography>
                <Typography color="text.secondary">
                  Highest: {data?.price_range_highest}
                </Typography>

                <Box component={"div"} sx={{ display: "flex", gap: 4, mt: 3 }}>
                  <Button
                    variant="outlined"
                    component={Link}
                    to={`/properties/${data?._id}`}
                    onClick={handleWishlist}
                  >
                    Add to wishlist
                  </Button>
                  <Button
                    variant="outlined"
                    // onClick={handleOpen}
                    onClick={() => setOpen(true)}
                  >
                    Review this property
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component={"div"}>
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 500,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                }}
              >
                <ModalClose />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textcolor="inherit"
                  fontWeight="lg"
                  mb={1}
                >
                  Add your review for this property.
                </Typography>

                <form onSubmit={handleReview}>
                  <Textarea
                    color="neutral"
                    disabled={false}
                    minRows={3}
                    size="lg"
                    variant="soft"
                    name="review"
                  />
                  <Button
                    type="submit"
                    sx={{ mt: 3 }}
                    fullWidth
                    variant="contained"
                  >
                    Submit
                  </Button>
                </form>
              </Sheet>
            </Box>
          </Modal>
        </Box>
      ) : (
        "no data"
      )}

      {/* Review section */}
      {/* <Typography>this isa test</Typography> */}
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {rev?.map((item, index) => (
          <Grid key={index} sx={{ mx: 1, my: 2 }} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "red" }}
                    aria-label="recipe"
                    component={"image"}
                    src={item.reviewer_image}
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.reviewer_name}
                subheader={item.review_date}
              />
              <Divider />
              <CardContent>
                <Typography>{item.review_description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyDetails;
