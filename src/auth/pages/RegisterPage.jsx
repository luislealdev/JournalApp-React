import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const {
    email,
    password,
    displayName,
    formState,
    onInputChange,
    isFormValid,
    validEmail,
    validPassword,
    validDisplayName,
  } = useForm({
    email: "luisrrleal@gmail.com",
    password: "123456",
    displayName: "Luis Leal",
  });

  const formValidation = {
    email: [(value) => value.includes("@"), "Please enter a valid email"],
    password: [(value) => value.length <= 6, "Please enter a valid password"],
    displayName: [(value) => value.length < 1, "Please enter a valid username"],
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Register now
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
