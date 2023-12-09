import { Container, Grid, Typography } from "@mui/material";
import UserReviewCard from "./UserReviewCard";

const reviewData = [
  {
    reviewer_name: "John Doe",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description:
      "A wonderful experience! The property exceeded our expectations.",
    property_title: "Luxurious Beachfront Villa",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Jane Smith",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Fantastic stay! Great amenities and stunning views.",
    property_title: "Mountain Retreat Cabin",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Alex Johnson",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Absolutely loved it! Perfect for a relaxing getaway.",
    property_title: "Seaside Cottage Escape",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Emily Brown",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Incredible property! Will definitely visit again.",
    property_title: "Rustic Country Farmhouse",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Michael Wilson",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Highly recommended! Exceeded all expectations.",
    property_title: "Urban Loft Apartment",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Sophia Garcia",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Amazing place! The views were breathtaking.",
    property_title: "Lakefront Retreat House",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "William Martinez",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Unforgettable experience! Will cherish the memories.",
    property_title: "Historic City Center Residence",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Olivia Miller",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Perfect staycation spot! Loved every moment.",
    property_title: "Cozy Forest Cabin",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Noah Thompson",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Excellent property! Great value for money.",
    property_title: "Modern City Skyline View Apartment",
    review_date: "Dec 8, 2021",
  },
  {
    reviewer_name: "Ava Davis",
    reviewer_image: "https://i.pravatar.cc/150?img=4",
    review_description: "Fantastic place to unwind! Superb amenities.",
    property_title: "Elegant Coastal Villa",
    review_date: "Dec 8, 2021",
  },
];

const UserReviews = () => {
  return (
    <Container maxWidth={"xl"} sx={{ mt: 15 }}>
      <Typography align="center" variant="h4" sx={{ my: 5 }}>
        User review&apos;s
      </Typography>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {reviewData.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <UserReviewCard data={data} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserReviews;
