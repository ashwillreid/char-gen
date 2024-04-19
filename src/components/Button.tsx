import { MouseEventHandler } from "react";

export default function Button({
  className = "",
  text,
  clickHandler,
  type,
}: Readonly<{
  className?: string;
  text: string;
  clickHandler?: MouseEventHandler;
  type?: { warning?: boolean; submit?: boolean };
}>) {
  if (type?.warning) {
    className += "bg-red-500";
  }
  if (type?.submit) {
    className += "bg-green-900";
  }
  return (
    <button
      className={`m-1 flex items-center hover:bg-gray-400  py-2 px-4 rounded h-6 ${className ?? className}`}
      onClick={clickHandler ? clickHandler : undefined}
    >
      <span>{text}</span>
    </button>
  );
}
