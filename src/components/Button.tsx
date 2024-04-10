export default function Button({
  className,
  text,
}: Readonly<{
  className?: string;
  text: string;
}>) {
  return (
    <button
      className={`flex items-center hover:bg-gray-400  py-2 px-4 rounded h-6 ${className ?? className}`}
    >
      <span>{text}</span>
    </button>
  );
}
