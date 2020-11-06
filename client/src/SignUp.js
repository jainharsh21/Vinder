import React, { useState } from "react";
import {
  Card,
  TextField,
  Radio,
  RadioGroup,
  Button,
  Switch,
  IconButton,
} from "ui-neumorphism";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CopyRight from "./CopyRight";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [checkedC, setCheckedC] = useState(true);

  const [gender, setGender] = useState("M");

  const handleSubmit = async () => {
    let route = checkedC ? "users" : "student_chapters";

    let student_body = {
      name: document.getElementById("name").value,
      password: document.getElementById("password").value,
      email: document.getElementById("attr").value,
      bio: "",
      imageUrl: "",
      sex: gender,
    };
    let chapter_body = {
      name: document.getElementById("name").value,
      description: document.getElementById("attr").value,
      password: document.getElementById("password").value,
      imageUrl: "",
    };
    try {
      const data = await fetch(`http://localhost:4000/${route}`, {
        method: "POST",
        body: checkedC
          ? JSON.stringify(student_body)
          : JSON.stringify(chapter_body),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .catch((e) => console.log(e));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setGender(event.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card width={400} height={470}>
        <div className={classes.paper}>
          <div style={{ padding: "8px" }}>
            <IconButton
              rounded
              text={false}
              color="var(--error)"
              style={{ padding: "8px" }}
            >
              <LockOutlinedIcon />
            </IconButton>
          </div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="div">
                  <Grid
                    component="label"
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <Grid item>Student Chapter</Grid>
                      <Grid item>
                        <AntSwitch
                          checked={checkedC}
                          onChange={() => setCheckedC(!checkedC)}
                          name="checkedC"
                        />
                      </Grid>
                      <Grid item>Student</Grid>
                    </div>
                  </Grid>
                </Typography>
              </Grid>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    width={300}
                    autoComplete="name"
                    value=""
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                {checkedC ? (
                  <Grid item xs={12}>
                    <TextField
                      width={300}
                      value=""
                      variant="outlined"
                      required
                      fullWidth
                      id="attr"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    <TextField
                      width={300}
                      value={""}
                      variant="outlined"
                      required
                      fullWidth
                      id="attr"
                      label="Description"
                      name="description"
                      autoComplete="description"
                      multiline
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    width={300}
                    value=""
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </div>
            </Grid>
            {checkedC ? (
              <Grid item xs={12}>
                <RadioGroup
                  value="M"
                  color="var(--primary)"
                  onChange={handleChange}
                >
                  <Radio value="M" label="Male" />
                  <Radio value="F" label="Female" />
                  <Radio value="O" label="Other" />
                </RadioGroup>
              </Grid>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" variant="body2" style={{ color: "black" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </>
        </div>
      </Card>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}
