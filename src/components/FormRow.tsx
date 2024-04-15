export default function FormRow({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:m-1">
      {children}
    </div>
  );
}
