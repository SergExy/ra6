import { ChangeEvent } from "react";

interface Props {
  label?: string;
  name: string;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const Textarea = ({ label, name, value, onChange, placeholder }: Props) => (
  <div>
    {label && (
      <div className="label">{label}</div>
    )}
    <div>
      <textarea name={name} value={value} onChange={(e) => onChange(e)} placeholder={placeholder} />
    </div>
  </div>
)

export default Textarea