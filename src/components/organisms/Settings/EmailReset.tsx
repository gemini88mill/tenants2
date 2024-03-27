import { Button, Grid, Stack } from "@mui/material";
import { EmailInput } from "../../molecules/Inputs/EmailInput";
import { useState } from "react";
import { supabase } from "../../../supabase/supabase";
import { useToast } from "../../contexts/ToastProvider";

export const EmailReset = () => {
  const [email, setEmail] = useState("");
  const {createToast} = useToast();

  const onClickHandler = async () => {
    const {error} = await supabase.auth.updateUser({
      email: email,
    });

    setEmail("");
    createToast({ type: error ? "error" : "success", message: error ? error.message : "Email updated" });
  };

  return (
    <Grid container spacing={2} sx={{ alignContent: "center" }}>
      <Grid item xs={7}>
        <h3>Change Email</h3>
      </Grid>
      <Grid item xs={5}>
        <Stack spacing={2}>
          <EmailInput value={email} setValue={setEmail}  />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="success" sx={{ float: "right" }} onClick={onClickHandler}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};