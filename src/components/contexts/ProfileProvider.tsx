/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";
import { Address, useAddresses } from "../hooks/useAddresses";
import { ContactState, useContacts } from "../hooks/useContacts";
import { ComboBoxBaseType } from "../molecules/Inputs/Combobox";
import { Country } from "../hooks/useCountries";

const ProfileContext = createContext<ProfileContextValue>({
  personal: {
    state: {
      displayName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
    },
    actions: {
      setPersonal: () => {},
    },
  },
  address: {
    state: [],
    actions: {
      createAddress: () => {},
      updateAddress: () => {},
      deleteAddress: () => {},
      clearAddress: () => {},
    },
    addressConstants: {
      countries: [],
      addressType: [],
    },
  },
  contact: {
    state: [],
    actions: {
      updateContact: () => {},
      addNewContact: () => {},
      clearContactValue: () => {},
      deleteContact: () => {},
    },
    contactConstants: {
      contactType: [],
    },
  },
});
ProfileContext.displayName = "ProfileContext";

type ProfileContextProps = {
  children: React.ReactNode;
};

type ProfileContextValue = {
  personal: {
    state: {
      displayName: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      date: string;
    };
    actions: {
      setPersonal: React.Dispatch<
        React.SetStateAction<{
          displayName: string;
          firstName: string;
          lastName: string;
          email: string;
          phone: string;
          date: string;
        }>
      >;
    };
  };
  address: {
    state: Address[];
    actions: {
      createAddress: () => void;
      updateAddress: (index: number, address: Address) => void;
      deleteAddress: (index: number) => void;
      clearAddress: (index: number) => void;
    };
    addressConstants: {
      countries: Country[];
      addressType: ComboBoxBaseType[];
    };
  };
  contact: {
    state: ContactState[];
    actions: {
      updateContact: (index: number, contact: ContactState) => void;
      addNewContact: () => void;
      clearContactValue: (index: number) => void;
      deleteContact: (index: number) => void;
    };
    contactConstants: {
      contactType: ComboBoxBaseType[]
    };
  };
};

export const ProfileContextProvider = ({ children }: ProfileContextProps) => {
  const [personal, setPersonal] = useState({
    displayName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
  });

  const {
    state: addressState,
    actions: { createAddress, updateAddress, deleteAddress, clearAddress },
    constants: addressConstants,
  } = useAddresses();

  const {
    state: contactState,
    actions: { updateContact, addNewContact, clearContactValue, deleteContact },
    constants: contactConstants,
  } = useContacts();

  const value = useMemo(
    () => ({
      personal: {
        state: personal,
        actions: { setPersonal },
      },
      address: {
        state: addressState,
        actions: { createAddress, updateAddress, deleteAddress, clearAddress },
        addressConstants,
      },
      contact: {
        state: contactState,
        actions: {
          updateContact,
          addNewContact,
          clearContactValue,
          deleteContact,
        },
        contactConstants,
      },
    }),
    [
      addNewContact,
      addressConstants,
      addressState,
      clearAddress,
      clearContactValue,
      contactConstants,
      contactState,
      createAddress,
      deleteAddress,
      deleteContact,
      personal,
      updateAddress,
      updateContact,
    ]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfileContext must be used within a ProfileContextProvider"
    );
  }

  return context;
};
