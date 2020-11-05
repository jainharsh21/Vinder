import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CopyRight from "./CopyRight";
import { FormControlLabel, Radio, RadioGroup, Switch } from "@material-ui/core";

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
  const [name, setName] = useState("");
  const [attr, setAttr] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {
    let route = checkedC ? "users" : "student_chapters";

    let student_body = {
      name,
      password,
      email: attr,
      bio: "",
      imageUrl: "",
      sex: gender,
    };
    let chapter_body = {
      name,
      description: attr,
      password,
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
    setGender(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
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
                  <Grid item>Student Chapter</Grid>
                  <Grid item>
                    <AntSwitch
                      checked={checkedC}
                      onChange={() => setCheckedC(!checkedC)}
                      name="checkedC"
                    />
                  </Grid>
                  <Grid item>Student</Grid>
                </Grid>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                  value={attr}
                  onChange={(e) => setAttr(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <TextField
                  value={attr}
                  onChange={(e) => setAttr(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  multiline
                />
              </Grid>
            )}
            {checkedC ? (
              <Grid item xs={12}>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender1"
                  value={gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="O"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
            ) : null}
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          </Grid>
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
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}
