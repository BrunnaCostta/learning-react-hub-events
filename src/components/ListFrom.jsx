export function ListForm({ itens, className, ...props }) {
  return (
    <select
      className={`input bg-transparent text-white ${className}`}
      {...props}
    >
      <option value="" disabled className="text-gray-400">
        Selecione uma opção
      </option>
      {itens.map((item) => (
        <option key={item.id} value={item.id} className="text-black">
          {item.nome}
        </option>
      ))}
    </select>
  );
}
