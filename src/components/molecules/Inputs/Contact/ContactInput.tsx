import { Box, Grid, TextField } from "@mui/material";
import { useCallback } from "react";
import { ContactState } from "../../../hooks/useContacts";
import { CancelClearButtonGroup } from "../../CancelClearButtonGroup";
import { ComboBoxBaseType, Combobox } from "../Combobox";
import { EmailInput } from "../EmailInput";
import { PhoneInput } from "../PhoneInput";

type ContactInputProps = {
  index: number;
  contact: ContactState;
  actions: {
    updateContact: (index: number, contact: ContactState) => void;
    deleteContact: (index: number) => void;
    clearContactValue: (index: number) => void;
    addNewContact: () => void;
  },
  constants: {
    contactType: ComboBoxBaseType[];
  };
};

export const ContactInput = ({index, contact, actions, constants}: ContactInputProps) => {
  const { updateContact, deleteContact, clearContactValue, addNewContact } = actions;

  const getContactInput = useCallback(
    (contact: ContactState, index: number) => {
      switch (contact.type?.name) {
        case "Phone":
          return (
            <PhoneInput
              width={10}
              value={contact.value}
              setValue={(e) => {
                updateContact(index, {
                  ...contact,
                  value: e,
                });
              }}
            />
          );
        case "Email":
          return (
            <EmailInput
              width={10}
              value={contact.value}
              setValue={(e) => {
                updateContact(index, {
                  ...contact,
                  value: e,
                });
              }}
            />
          );
        default:
          return (
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                label="Contact"
                fullWidth
                value={contact.value}
                onChange={(e) => {
                  updateContact(index, {
                    ...contact,
                    value: e.target.value,
                  });
                }}
              />
            </Grid>
          );
      }
    },
    [updateContact]
  );

  return (
    <Box width={1} key={index}>
      <Grid container spacing={2} key={index}>
        <CancelClearButtonGroup
          showDelete={index > 0}
          showAdd={index === 0}
          cancelAction={() => clearContactValue(index)}
          deleteAction={() => deleteContact(index)}
          addAction={() => addNewContact()}
        />
        <Combobox<ComboBoxBaseType>
          width={2}
          value={contact.type}
          setValue={(e) => updateContact(index, { type: e, value: "" })}
          options={constants.contactType}
          label="Type"
        />
        {getContactInput(contact, index)}
      </Grid>
    </Box>
  );
};
