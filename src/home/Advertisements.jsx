import { Container, Grid, Typography } from "@mui/material";
import AdvertisementCard from "./AdvertisementCard";

const addData = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "456 Elm Street, City A",
    price_range: "$400,000 - $450,000",
    verification_status: "Verified",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "789 Oak Avenue, City B",
    price_range: "$550,000 - $600,000",
    verification_status: "Pending",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "321 Pine Road, City C",
    price_range: "$700,000 - $750,000",
    verification_status: "Verified",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "321 Pine Road, City C",
    price_range: "$700,000 - $750,000",
    verification_status: "Verified",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "321 Pine Road, City C",
    price_range: "$700,000 - $750,000",
    verification_status: "Verified",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "321 Pine Road, City C",
    price_range: "$700,000 - $750,000",
    verification_status: "Verified",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "321 Pine Road, City C",
    price_range: "$700,000 - $750,000",
    verification_status: "Verified",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "321 Pine Road, City C",
    price_range: "$700,000 - $750,000",
    verification_status: "Verified",
  },
];

const Advertisements = () => {
  return (
    <Container maxWidth={"xl"} sx={{ mt: 15 }}>
      <Typography align="center" variant="h4" sx={{my: 5,}}>Advertisements</Typography>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {addData.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <AdvertisementCard data={data} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Advertisements;
