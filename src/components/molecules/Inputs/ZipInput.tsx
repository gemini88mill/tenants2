import { StringInput } from "../../atoms/StringInput";

type ZipInputProps = {
  value: string;
  setValue: (e: string) => void;
  width?: number;
};

export const ZipInput = ({ value, setValue, width }: ZipInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 5) return;

    // Remove all non-digit characters and + - ( ) from the input
    value = value.replace(/[^0-9-]/g, "");

    setValue(value);
  };

  return (
    <StringInput
      label="Postal Code"
      width={width}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
