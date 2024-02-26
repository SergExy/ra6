import { ChangeEvent } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ label, name, type = 'text', value, onChange, placeholder }: Props) => (
  <div>
    <div className="label">{label}</div>
    <div>
      <input type={type} name={name} value={value} onChange={(e) => onChange(e)} placeholder={placeholder} />
    </div>
  </div>
)

export default Input