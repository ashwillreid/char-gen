import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex min-w-full justify-center">
      <Link href="/" className="flex flex-direction-row">
        <Image src="/crest.png" alt="Icon" width={50} height={50} />
        <p className="text-5xl ml-2">Character Generator</p>
      </Link>
    </div>
  );
};

export default Header;
