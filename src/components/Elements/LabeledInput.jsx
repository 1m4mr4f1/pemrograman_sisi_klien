const LabeledInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-lg px-4 py-2 focus:outline-none"
      />
    </div>
  );
};

export default LabeledInput;
