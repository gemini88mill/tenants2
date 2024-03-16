import { Button, Grid, Stack } from "@mui/material";
import { StringInput } from "../../atoms/StringInput";
import { useCallback, useEffect, useState } from "react";

const usePasswordValidator = (password: string, confirmPassword: string) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const checkValidity = useCallback(
    () => {
      if (
        password === confirmPassword ||
        (password === "" ||
        confirmPassword === "")
      ) {
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
      }
    },
    [confirmPassword, password]
  );

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      checkValidity();
    }, 500);

    return () => clearTimeout(timeoutid);
  }, [password, confirmPassword, checkValidity]);

  return isInvalid;
};

export const PasswordReset = () => {
  const [passwordPair, setPasswordPair] = useState(["", ""]);
  const isInvalid = usePasswordValidator(passwordPair[0], passwordPair[1]);
  const onClickHandler = () => {
    console.log("Password Reset");
  };

  return (
    <Grid container spacing={2} sx={{ alignContent: "center" }}>
      <Grid item xs={7}>
        <h3>Change Password</h3>
      </Grid>
      <Grid item xs={5}>
        <Stack spacing={2}>
          <StringInput
            label="New Password"
            value={passwordPair[0]}
            onChange={(e) => setPasswordPair([e.target.value, passwordPair[1]])}
            password
          />
          <StringInput
            label="Confirm Password"
            value={passwordPair[1]}
            onChange={(e) => setPasswordPair([passwordPair[0], e.target.value])}
            password
          />
        </Stack>
      </Grid>
      <Grid item xs={10}>
        {isInvalid ? (
          <p style={{ float: "right" }}>Passwords do not match</p>
        ) : null}
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="success"
          sx={{ float: "right" }}
          onClick={onClickHandler}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
