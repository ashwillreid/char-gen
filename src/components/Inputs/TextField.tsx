"use client";
export default function TextField({
  className,
  placeholder,
  val = "",
  onUpdate,
}: Readonly<{
  className?: string;
  placeholder: string;
  val: string;
  onUpdate: Function;
}>) {
  return (
    <div className={`w-64 m-1 ${className ?? className}`}>
      <input
        type="text"
        className="block text-2xl w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600"
        placeholder={placeholder}
        value={val}
        onChange={(e) => {
          onUpdate(e.target.value);
        }}
      />
    </div>
  );
}
