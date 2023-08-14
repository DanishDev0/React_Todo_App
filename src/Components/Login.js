import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cogoToast from "cogo-toast";
import { styled } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        T`ODO APP
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (
      data.get("email") === "danish.dev000@gmail.com" &&
      data.get("password") === "12345678"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "danish.dev000@gmail.com",
          password: "12345678",
        })
      );
      cogoToast.success("Login Success", {
        position: "bottom-right",
        
      });

      navigate("/home");

      // alert('Login Success')
      // cogoToast.info('This is a info message');
    } else {
      // alert("Login Failed")
      cogoToast.error("Login Failed", { position: "bottom-right" });
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user, "=");
    if (user) {
      if (
        user.email === "danish.dev000@gmail.com" &&
        user.password === "12345678"
      ) {
        navigate("/home");
      }
    }
  }, []);

  const SignInButton = styled(Button)(({ theme }) => ({
    color: "white",
    margin: "0px !important",
    backgroundColor: "var(--primary)",
    "&:hover": {
      backgroundColor: "#1e4465",
    },
  }));

  return (
    <Stack className="login_wrapper">
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          className="login_box"
          sx={{
            boxShadow: 2,
            border: "2px solid var(--primary)",
            borderRadius: "0.45rem",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <div className="login_logo">
              <img src="/myLogo.jpg" />
            </div>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={"danish.dev000@gmail.com"}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={"12345678"}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <SignInButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </SignInButton>
              {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Stack>
  );
}
