import { StringInput } from "../../atoms/StringInput";

type PhoneInputProps = {
  value: string;
  setValue: (e: string) => void;
  width?: number;
};

export const PhoneInput = ({ value, setValue, width }: PhoneInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 15) return;

    // Remove all non-digit characters and + - ( ) from the input
    value = value.replace(/[^0-9-+()]/g, "");

    setValue(value);
  };

  return (
    <StringInput
      label="Phone"
      width={width}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
