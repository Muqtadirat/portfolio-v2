interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  label,
  disabled,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full p-2 lg:p-3 border-b-2 border-border-default transition-colors duration-700 ease-in-out focus:outline-none focus:border-black placeholder:text-text-subdued"
      />
    </div>
  );
};

export default InputField;
