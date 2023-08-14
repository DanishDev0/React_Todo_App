import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ReactPhoneInput from "react-phone-input-material-ui";
import "react-phone-input-2/lib/style.css";
import "./Signup.css";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import OtpInput from "react-otp-input";

import cogoToast from "cogo-toast";

import Backdrop from "./BackDrop"
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'

//============== OTP Dialog Box =================

const OTP = () => {
  const [otp, setotp] = React.useState("");
  const handleChange = (otp) => setotp(otp);
  return (
    <div className="react-otp-wrap">
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        separator={<span>—</span>}
      />
    </div>
  );
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs(props) {
  return (
    <div>
      {/* <Button variant="outlined" onClick={props.handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
          sx={{ textAlign: "center" }}
        >
          Email Verfication:-
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: "1.2rem",
              marginTop: "5px",
            }}
            gutterBottom
          >
            Please enter the one time password to verify your account A code has
            been sent to Email.
          </Typography>
          <OTP></OTP>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
           verify
          </Button> */}

          <Button sx={{ width: "50%", margin: "auto" }} variant="contained">
            Verify
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

//============================

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
        DCMCloud
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
// =============================== Main Componenet ==================================
function SignUp(props) {
  const [bussinessName, setBussinessName] = React.useState("");
  const [contactPersonName, setContactPersonName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loader, setloader] = React.useState(false);


  var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const signupUser = async (e) => {
    e.preventDefault();
    console.log("signupUser");
    if (bussinessName === "") {
      cogoToast.error("Bussiness Name Required", { position: "bottom-right" });
    } else if (contactPersonName === "") {
      cogoToast.error("ContactPerson Name Required", {
        position: "bottom-right",
      });
    } else if (email === "") {
      cogoToast.error("Email Required", { position: "bottom-right" });
    }
    //  else if (!validator.isEmail(Email)) {

    // }
     else if (!email.match(mailformat)) {
      cogoToast.error('Email is not valid',{position:'bottom-right'});

    }
    else if (phone === "") {
      cogoToast.error("Phone Number Required", { position: "bottom-right" });
    } else {
      setloader(true)
      var data = {
        bussinessName: bussinessName,
        contactPersonName: contactPersonName,
        email: email,
        phone: phone,
      };

      console.log("user", data);
      setTimeout(()=>{
setloader(false)
        handleClickOpen()
      },2000)
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  //   const [value, setvalue] = React.useState('')
  // const [defaultCountry, setdefaultCountry] = React.useState('')

  return (
    <>
    {loader?<Backdrop/>:''}
      <CustomizedDialogs
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              On-Boarding Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
              className="my"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="BussinessName"
                    label="Bussiness Name"
                    autoComplete="Bussiness-Name"
                    onChange={(e) => setBussinessName(e.target.value)}
                    name="bussinessName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Contact-PersonName"
                    label="Contact Person Name"
                    name="Contact Person Name"
                    autoComplete="Contact-Person-Name"
                    onChange={(e) => {
                      setContactPersonName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReactPhoneInput
                  country={'pk'}
                    // value={value}
                    defaultCountry='gb'
                    onChange={setPhone}
                    component={TextField}
                  />
                </Grid>
              </Grid>
              <Button
                // onClick={handleClickOpen}
                onClick={signupUser}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
export default SignUp;
