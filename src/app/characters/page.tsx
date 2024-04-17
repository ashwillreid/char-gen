import { query } from "../../../static/helpers/query";
import Link from "next/link";

type Character = {
  id: string;
  name: string;
  age: number;
  race: string;
  charClass: string;
};

export default async function Test() {
  const characterFactory = (character: Character) => {
    return (
      <Link href={`/character/${character.id}`}>
        <div className="border border-gray-500 p-2 rounded m-4">
          <p>NAME: {JSON.stringify(character.name)}</p>
          <p>AGE: {JSON.stringify(character.age)}</p>
          <p>CLASS: {JSON.stringify(character.charClass)}</p>
          <p>RACE: {JSON.stringify(character.race)}</p>
        </div>
      </Link>
    );
  };

  const characters = await query("characters");

  return (
    <main>
      {characters.map((character: Character) => characterFactory(character))}
    </main>
  );
}
