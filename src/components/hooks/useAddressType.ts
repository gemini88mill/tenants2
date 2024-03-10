import { useState } from "react";
import { ComboBoxBaseType } from "../molecules/Inputs/Combobox";



export const useAddressType = () => {
  const [selected, setselected] = useState<ComboBoxBaseType| null>(null);

  const addressType: ComboBoxBaseType[] = [
    { name: "Home", svg: "" },
    { name: "Shipping", svg: "" },
    { name: "Billing", svg: "" },
  ];
  
  return {
    addressType,
    selected,
    setselected,
  };
};