import type { Metadata } from "next";
import { Handjet } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const handjet = Handjet({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Character Generator",
  description: "WIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={handjet.className + " " + "flex justify-center bg-gray-600"}
      >
        <div className="container max-w-3xl">
          <div className="flex flex-col min-h-screen m-8 my-2 border-opacity-25 border-2 border-gray-500 border rounded p-2 outline-offset-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
