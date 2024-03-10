import { StringInput } from "../../atoms/StringInput";

type NameInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width: number;
};

//todo: create components for name, email, phone, and password inputs

export const NameInput = ({ value, onChange, width }: NameInputProps) => (
  <StringInput label="Name" width={width} value={value} onChange={onChange} />
);
