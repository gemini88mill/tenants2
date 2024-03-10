import { Box, Button, Divider, Grid } from "@mui/material";
import { AddressGroup } from "../molecules/Inputs/Address/AddressGroup";
import { ContactGroup } from "../molecules/Inputs/Contact/ContactGroup";
import { PersonalInput } from "../molecules/PersonalInput";
import { useProfileContext } from "../contexts/ProfileProvider";
import { createProfile } from "../../supabase/profileClient";
import { useSessionProvider } from "../contexts/SessionProvider";

export const Profile = () => {
  const {personal: state} = useProfileContext();
  const {session} = useSessionProvider();
  const onClickHandler = () => {
    createProfile(session, {
      display_name: state.state.displayName,
      first_name: state.state.firstName,
      last_name: state.state.lastName,
      date_of_birth: state.state.date,
      created_by: 0,
      userId: session?.user.id,
    });
  };

  return (
    <Box>
      <PersonalInput />
      <AddressGroup />
      <ContactGroup />
      <Grid container spacing={2} marginTop={"16px"}>
        <Divider />
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
    </Box>
  );
};
