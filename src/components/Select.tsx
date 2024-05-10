import { HTMLAttributes } from "react";

export function Select({
  options,
  handleChange,
  ...rest
}: {
  options: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & HTMLAttributes<HTMLSelectElement>) {
  return (
    <select onChange={handleChange} {...rest}>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
