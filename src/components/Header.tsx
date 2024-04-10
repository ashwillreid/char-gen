import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex flex-col min-w-full items-center">
      <Link href="/" className="flex flex-direction-row">
        <Image src="/crest.png" alt="Icon" width={50} height={50} />
        <p className="text-5xl ml-2">Character Generator</p>
      </Link>
      <div>
        <Link href="/NewCharacter">
          <Button text="New Character" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
