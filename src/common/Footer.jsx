import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 5,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        m: 0,
      }}
    >
      <Typography>&copy; 2023 Your Website. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
