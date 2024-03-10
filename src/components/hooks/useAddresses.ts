import { useCallback, useMemo, useState } from "react";
import { useAddressType } from "./useAddressType";
import { Country, useCountries } from "./useCountries";
import { ComboBoxBaseType } from "../molecules/Inputs/Combobox";

export type Address = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  country: Country | null;
  addressType: ComboBoxBaseType | null;
};

export const useAddresses = () => {
  const { countries } = useCountries();
  const { addressType } = useAddressType();
  const [addresses, setAddresses] = useState<Address[]>([
    {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: null,
      addressType: null,
    },
  ]);

  const getAddress = useCallback(
    (index: number) => {
      return addresses[index];
    },
    [addresses]
  );

  const updateAddress = useCallback((index: number, address: Address) => {
    setAddresses((addresses) => {
      const newAddresses = [...addresses];
      newAddresses[index] = address;
      return newAddresses;
    });
  }, []);

  const createAddress = useCallback(() => {
    setAddresses((addresses) => [
      ...addresses,
      {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: null,
        addressType: null,
      },
    ]);
  }, []);

  const deleteAddress = useCallback((index: number) => {
    setAddresses((addresses) => {
      const newAddresses = [...addresses];
      newAddresses.splice(index, 1);
      return newAddresses;
    });
  }, []);

  const clearAddress = useCallback((index: number) => {
    setAddresses((addresses) => {
      const newAddresses = [...addresses];
      newAddresses[index] = {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: null,
        addressType: null,
      };
      return newAddresses;
    });
  }, []);

  const address = useMemo(
    () => ({
      state: addresses,
      actions: {
        getAddress,
        createAddress,
        updateAddress,
        deleteAddress,
        clearAddress,
      },
      constants: {
        countries,
        addressType,
      },
    }),
    [
      addressType,
      addresses,
      countries,
      createAddress,
      deleteAddress,
      getAddress,
      updateAddress,
      clearAddress
    ]
  );

  return address;
};