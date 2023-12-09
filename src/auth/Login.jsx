import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../lottie-animation/login.json";
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const { signInWithEmail, googleLogin } = useContext(AuthContext);



  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
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
      <Grid container spacing={2} alignItems="center">
        <Grid container item xs={6} direction={"column"} alignItems={"center"}>
          <Typography variant="h5">Please Login</Typography>

          <form onSubmit={handleLogin}>
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
              Don&#39;t have an account?{" "}
              <Link to={"/register"} underline="hover">
                Register Now
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
          <Box component={"div"} sx={{ maxWidth: "100%" }}>
            <Lottie animationData={loginAnimation} loop={true} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
