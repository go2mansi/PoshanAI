type Props = {
  placeholder: string;
  value: string | number;
  onChange: (v: string) => void;
};

export default function Input({ placeholder, value, onChange }: Props) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border p-3 rounded-lg"
    />
  );
}