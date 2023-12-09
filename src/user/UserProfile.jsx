import { Avatar, Box, Button, Card, Typography } from "@mui/material";
// import user from "../auth/FakeUser";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  // const { name, image, email, userRole } = user;

  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  const { displayName, email, photoURL } = user;

  const role = localStorage.getItem.userRole;

  return (
    <Card
      sx={{
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
      }}
    >
      <Avatar
        sx={{ width: 120, height: 120, mb: 2 }}
        alt={name}
        src={photoURL}
      />
      <Typography>{displayName}</Typography>
      <Typography>{email}</Typography>
      <Typography>{localStorage.getItem(role)}</Typography>
      <Box component={"div"} sx={{ display: "flex", gap: 4, mt: 3 }}>
        <Button variant="outlined">Dashboard</Button>
        <Button variant="outlined">Logout</Button>
      </Box>
    </Card>
  );
};

export default UserProfile;
