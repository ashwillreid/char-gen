export default function FormRow({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-2 w-full flex flex-col items-center md:flex-row md:justify-center">
      {children}
    </div>
  );
}
