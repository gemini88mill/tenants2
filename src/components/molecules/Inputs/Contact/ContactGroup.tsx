import { Box, Stack } from "@mui/material";
import { useProfileContext } from "../../../contexts/ProfileProvider";
import { ContactInput } from "./ContactInput";

export const ContactGroup = () => {
  const {contact: {
    state,
    actions: {
      updateContact,
      deleteContact,
      clearContactValue,
      addNewContact,
    },
    contactConstants: constants,
  }} = useProfileContext();

  return (
    <Box sx={{ width: 1 }}>
      <h4>Contact</h4>
      <Stack spacing={2}>
        {state &&
          state.map((c, i) => {
            return (
              <ContactInput
                key={i}
                index={i}
                contact={c}
                actions={{
                  updateContact,
                  deleteContact,
                  clearContactValue,
                  addNewContact,
                }}
                constants={constants}
              />
            );
          })}
      </Stack>
    </Box>
  );
};
