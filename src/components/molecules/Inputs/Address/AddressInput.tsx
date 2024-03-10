import { Box, Grid } from "@mui/material";
import { StringInput } from "../../../atoms/StringInput";
import { Address } from "../../../hooks/useAddresses";
import { Country } from "../../../hooks/useCountries";
import { CancelClearButtonGroup } from "../../CancelClearButtonGroup";
import { ComboBoxBaseType, Combobox } from "../Combobox";
import { ZipInput } from "../ZipInput";

type AddressInputProps = {
  address: Address;
  index: number;
  actions: {
    updateAddress: (index: number, address: Address) => void;
    deleteAddress: (index: number) => void;
    clearAddress: (index: number) => void;
    createAddress: () => void;
  };
  constants: {
    countries: Country[];
    addressType: ComboBoxBaseType[];
  };
};

//todo: find out why i get just use the hook useAddresses instead of passing it through.

export const AddressInput = ({
  address,
  index,
  actions,
  constants,
}: AddressInputProps) => {
  const { addressLine1, addressLine2, city, state, zip, country, addressType } =
    address;

  const { updateAddress, deleteAddress, clearAddress, createAddress } = actions;

  return (
    <Box sx={{ width: 1 }}>
      <Grid container spacing={2}>
        <CancelClearButtonGroup
          showDelete={index > 0}
          cancelAction={() => clearAddress(index)}
          deleteAction={() => deleteAddress(index)}
          addAction={() => createAddress()}
          showAdd={index === 0}
        />
        <Combobox<ComboBoxBaseType>
          width={2}
          value={addressType}
          setValue={(e) => updateAddress(index, { ...address, addressType: e })}
          options={constants.addressType}
          label="Address Type"
        />
        <StringInput
          label="Address Line 1"
          width={6}
          value={addressLine1}
          onChange={(e) =>
            updateAddress(index, {
              ...address,
              addressLine1: e.target.value,
            })
          }
        />
        <StringInput
          label="Address Line 2"
          width={4}
          value={addressLine2}
          onChange={(e) =>
            updateAddress(index, {
              ...address,
              addressLine2: e.target.value,
            })
          }
        />
        <StringInput
          label="City"
          width={4}
          value={city}
          onChange={(e) =>
            updateAddress(index, { ...address, city: e.target.value })
          }
        />
        <StringInput
          label="State"
          width={2}
          value={state}
          onChange={(e) =>
            updateAddress(index, { ...address, state: e.target.value })
          }
        />
        <ZipInput
          value={zip}
          setValue={(e) => updateAddress(index, { ...address, zip: e })}
          width={3}
        />
        <Combobox<Country>
          width={3}
          value={country}
          setValue={(e) => updateAddress(index, { ...address, country: e })}
          options={constants.countries}
          label="Country"
        />
      </Grid>
    </Box>
  );
};
