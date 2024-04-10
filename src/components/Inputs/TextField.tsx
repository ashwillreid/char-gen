export default function TextField({
  className,
  placeholder,
}: Readonly<{
  className?: string;
  placeholder: string;
}>) {
  return (
    <div className={`w-48 m-1 ${className ?? className}`}>
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}
