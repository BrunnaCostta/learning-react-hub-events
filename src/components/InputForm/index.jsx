export function InputForm({ type, placeholder, className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input bg-transparent text-white ${className}`}
      {...props}
    />
  );
}
