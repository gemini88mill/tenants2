import { Button, Grid, Stack } from "@mui/material";
import { PhoneInput } from "../../molecules/Inputs/PhoneInput";
import { useState } from "react";
import { supabase } from "../../../supabase/supabase";
import { useToast } from "../../contexts/ToastProvider";

export const PhoneReset = () => {
  const [phone, setPhone] = useState("");
  const {createToast} = useToast();

  const onClickHandler = async () => {
    const {error} = await supabase.auth.updateUser({
      phone: phone,
    });

    setPhone("");
    createToast({ type: error ? "error" : "success", message: error ? error.message : "Phone updated" });
  };

  return (
    <Grid container spacing={2} sx={{ alignContent: "center" }}>
      <Grid item xs={7}>
        <h3>Change Phone</h3>
      </Grid>
      <Grid item xs={5}>
        <Stack spacing={2}>
          <PhoneInput value={phone} setValue={setPhone} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
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