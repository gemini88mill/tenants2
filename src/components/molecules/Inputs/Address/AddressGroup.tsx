import { Box, Divider, Stack } from "@mui/material";
import { useProfileContext } from "../../../contexts/ProfileProvider";
import { AddressInput } from "./AddressInput";

export const AddressGroup = () => {
  const {address: {state, addressConstants: constants, actions: {
    updateAddress,
    deleteAddress,
    clearAddress,
    createAddress
  }}} = useProfileContext();

  return (
    <Box sx={{ width: 1 }}>
      <h4>Address</h4>
      <Stack spacing={2} divider={<Divider />}>
        {state.map((address, index) => (
          <AddressInput
            key={index}
            address={address}
            index={index}
            actions={{ updateAddress, deleteAddress, clearAddress, createAddress }}
            constants={constants}
          />
        ))}
      </Stack>
    </Box>
  );
};
