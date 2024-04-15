interface Option {
  val: string;
  text: string;
  disabled?: boolean;
}

export default function Select({
  className,
  label,
  options,
  val,
  onUpdate,
}: Readonly<{
  className?: string;
  label: string;
  options: Option[];
  val: string;
  onUpdate: Function;
}>) {
  const optionFactory = (option: Option) => {
    return (
      <option value={option.val} key={option.val}>
        {option.text}
      </option>
    );
  };

  return (
    <div className={`relative w-64 m-1 ${className ?? className}`}>
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1 flex h-full w-full select-none text-[16px] font-normal text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1  after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
      <select
        value={val}
        className="text-2xl rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 ring-1 ring-inset ring-gray-500"
        onChange={(e) => onUpdate(e.target.value)}
      >
        {options.map((option) => optionFactory(option))}
      </select>
    </div>
  );
}
