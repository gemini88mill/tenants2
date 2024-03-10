import { StringInput } from "../../atoms/StringInput";

type EmailInputProps = {
  value: string;
  setValue: (e: string) => void;
  width?: number;
};

export const EmailInput = ({ value, setValue, width }: EmailInputProps) => {
  return (
    <StringInput
      label="Email"
      width={width}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      pattern={/^\S+@\S+\.\S+$/}
    />
  );
};
