import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Lottie from "lottie-react";
import registerAnimation from "../lottie-animation/register.json";
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../config/config.firbase";
import axios from "axios";

const Register = () => {
  const { signUpwithEmail, googleLogin } = useContext(AuthContext);

  // console.log(user);

  const handleForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    // console.log(name, email, photoUrl, password);

    await signUpwithEmail(email, password)
      .then((user) => console.log(user.user))
      .catch((err) => console.log(err));

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        console.log("Profile updated!");
        axios
          .post("/api/auth/user", {
            name: name,
            email: email,
            userRole: "User",
          })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          userRole: "User",
        };
        axios.post("/api/auth/user", userInfo).then((res) => {
          console.log(res.data);
        });
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };

  return (
    <Container maxWidth={"md"} sx={{ mb: 10 }}>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid container item xs={6} direction={"column"} alignItems={"center"}>
          <Typography variant="h5">Please Register</Typography>

          <form onSubmit={handleForm}>
            <TextField
              sx={{ width: 320 }}
              margin="normal"
              size="small"
              label="Name"
              variant="outlined"
              name="name"
            />
            <TextField
              sx={{ width: 320 }}
              margin="normal"
              size="small"
              label="Email"
              variant="outlined"
              name="email"
            />
            <TextField
              sx={{ width: 320 }}
              margin="normal"
              size="small"
              label="Profile Photo 'URL'"
              variant="outlined"
              name="photoUrl"
            />
            <TextField
              sx={{ width: 320 }}
              margin="normal"
              size="small"
              label="Password"
              variant="outlined"
              name="password"
            />
            <Button
              variant="contained"
              disableElevation
              sx={{ width: 320, mt: 2 }}
              type="submit"
            >
              Submit
            </Button>

            <Typography sx={{ mt: 2 }}>
              Have an account?{" "}
              <Link to={"/login"} underline="hover">
                Login Now
              </Link>
              .
            </Typography>

            {/* Google sign in */}
            <Typography sx={{ mt: 2 }} variant="overline">
              Or continue with
            </Typography>
            <Button
              startIcon={<Google />}
              variant="contained"
              disableElevation
              sx={{ width: 320 }}
              onClick={handleGoogleLogin}
            >
              Google
            </Button>
          </form>
        </Grid>
        <Grid container item xs={6} direction={"column"} alignItems={"center"}>
          <Box component={"div"} width={"100%"}>
            <Lottie animationData={registerAnimation} loop={true} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
