export default function TextInput({ value, onChange, description, id }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-2 mt-1">Informe {description}:</label>
      <input
        id={id}
        autoFocus
        className="border border-yellow-300 rounded-md pl-2"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
