import { useState } from "react";
import { ComboBoxBaseType } from "../molecules/Inputs/Combobox";

export type ContactState = {
  type: ComboBoxBaseType | null;
  value: string;
};

export const useContacts = () => {
  const contactType: ComboBoxBaseType[] = [
    { name: "Phone" },
    { name: "Email" },
    { name: "Other" },
  ];
  const [contacts, setContacts] = useState<ContactState[]>([
    {
      type: null,
      value: "",
    },
  ]);

  const getContact = (index: number) => {
    return contacts[index];
  };

  const addNewContact = () => {
    setContacts((prev) => {
      return [
        ...prev,
        {
          type: null,
          value: "",
        },
      ];
    });
  };

  const updateContact = (index: number, contact: ContactState) => {
    setContacts((prev) => {
      const updatedContacts = [...prev];
      updatedContacts[index] = contact;
      return updatedContacts;
    });
  };

  const deleteContact = (index: number) => {
    setContacts((prev) => {
      const updatedContacts = [...prev];
      updatedContacts.splice(index, 1);
      return updatedContacts;
    });
  };

  const clearContactValue = (index: number) => {
    setContacts((prev) => {
      const updatedContacts = [...prev];
      updatedContacts[index].value = "";
      return updatedContacts;
    });
  };

  return {
    state: contacts,
    actions: {
      addNewContact,
      updateContact,
      deleteContact,
      getContact,
      clearContactValue,
    },
    constants: {contactType}
  };
};