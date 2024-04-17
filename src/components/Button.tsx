import { MouseEventHandler } from "react";

export default function Button({
  className,
  text,
  clickHandler,
}: Readonly<{
  className?: string;
  text: string;
  clickHandler?: MouseEventHandler;
}>) {
  return (
    <button
      className={`flex items-center hover:bg-gray-400  py-2 px-4 rounded h-6 ${className ?? className}`}
      onClick={clickHandler ? clickHandler : undefined}
    >
      <span>{text}</span>
    </button>
  );
}
