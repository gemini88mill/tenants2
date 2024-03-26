import { Button, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../../supabase/supabase";
import { StringInput } from "../../atoms/StringInput";
import { useToast } from "../../contexts/ToastProvider";

const usePasswordValidator = (password: string, confirmPassword: string) => {
  const [invalidReason, setInvalidReason] = useState("");

  const checkValidity = useCallback(
    () => {
      if (
        password !== confirmPassword 
      ) {
        setInvalidReason("passwords do not match");
      } else if (password.length > 0 && password.length < 8) {
        setInvalidReason("password must be at least 8 characters long");
      } else {
        setInvalidReason("");
      }
    },
    [confirmPassword, password]
  );

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      checkValidity();
    }, 200);

    return () => clearTimeout(timeoutid);
  }, [password, confirmPassword, checkValidity]);

  return {invalidReason};
};

export const PasswordReset = () => {
  const [passwordPair, setPasswordPair] = useState(["", ""]);
  const {invalidReason} = usePasswordValidator(passwordPair[0], passwordPair[1]);
  const {createToast} = useToast();
  const onClickHandler = async () => {
    const {data, error} = await supabase.auth.updateUser({
      password: passwordPair[0],
    });

    setPasswordPair(["", ""]);
    createToast({ type: error ? "error" : "success", message: error ? error.message : "Password updated" });
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
        {invalidReason.length > 0 ? (
          <p style={{ float: "right" }}>{invalidReason}</p>
        ) : null}
      </Grid>
      <Grid item xs={2}>
        <Button
          disabled={invalidReason.length > 0 || (passwordPair[0] === "" && passwordPair[1] === "")}
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
