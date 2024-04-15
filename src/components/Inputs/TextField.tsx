"use client";
export default function TextField({
  className,
  type = "text",
  placeholder,
  val = "",
  onUpdate,
}: Readonly<{
  className?: string;
  type?: string;
  placeholder: string;
  val: string;
  onUpdate: Function;
}>) {
  return (
    <div className={`w-64 m-1 ${className ?? className}`}>
      <input
        type={type}
        className="block bg-gray-700 text-2xl w-full rounded-md py-1.5 pl-2 pr-2 ring-1 ring-inset ring-gray-500 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600"
        placeholder={placeholder}
        value={val}
        onChange={(e) => {
          onUpdate(e.target.value);
        }}
      />
    </div>
  );
}
