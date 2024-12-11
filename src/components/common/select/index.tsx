interface Option {
  id: string | number;
  name: string;
}

type SelectProps<T> = {
  name: string;
  placeholder: string;
  options: T[];
};

export const Select = <T extends Option>({
  name,
  placeholder,
  options,
}: SelectProps<T>) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {placeholder}
      </label>
      <select
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 appearance-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
