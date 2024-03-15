import { Grid, Stack } from "@mui/material";
import { StringInput } from "../../atoms/StringInput";

export const PasswordReset = () => {
  return (
    <Grid container spacing={2} sx={{ alignContent: "center" }}>
      <Grid item xs={7}>
        <h3>Change Password</h3>
      </Grid>
      <Grid item xs={5}>
        <Stack spacing={2}>
          <StringInput
            label="Old Password"
            value="password"
            onChange={(e) => console.log(e.target.value)}
            password
          />
          <StringInput
            label="New Password"
            value=""
            onChange={(e) => console.log(e.target.value)}
            password
          />
          <StringInput
            label="Confirm Password"
            value=""
            onChange={(e) => console.log(e.target.value)}
            password
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
