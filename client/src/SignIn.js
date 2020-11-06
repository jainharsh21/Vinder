import React, { useState } from "react";
import { Card, Button, IconButton, TextField } from "ui-neumorphism";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CopyRight from "./CopyRight";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: "15px",
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [attr, setAttr] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let student_body = {
      email: attr,
      password,
    };
    let chapter_body = {
      name: attr,
      password,
    };
    try {
      const data = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        body: attr.includes("@")
          ? JSON.stringify(student_body)
          : JSON.stringify(chapter_body),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .catch((e) => console.log(e));
      console.log(data);
      if (data.status === false) alert("You have entered incorrect details.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      style={{ backgroundColors: "yellow" }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Card width={400} height={400}>
        <div className={classes.paper}>
          <IconButton
            style={{ padding: "8px" }}
            rounded
            text={false}
            color="var(--error)"
          >
            <LockOutlinedIcon />
          </IconButton>
          <Typography
            style={{ paddingTop: "10px", paddingBottom: "15px" }}
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <TextField
            style={{ paddingBottom: "10px" }}
            width={300}
            value={attr}
            onChange={(e) => setAttr(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            id="email/name"
            label="Email Address/Name"
            name="email/name"
            autoComplete="email"
            autoFocus
          />
          <TextField
            width={300}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container style={{ paddingTop: "30px" }}>
            <Grid item xs>
              <Link href="#" variant="body2"></Link>
            </Grid>
            <Grid item>
              <Link to="/signup" style={{ color: "black" }} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Card>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
}
