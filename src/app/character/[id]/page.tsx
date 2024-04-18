import { getCharacterById } from "@/API/query/character";

export default async function Test({ params }: { params: { id?: string } }) {
  if (params.id) {
    const character = await getCharacterById(params.id);

    return (
      <div className="border border-gray-500 p-2 rounded m-4">
        <p>NAME: {JSON.stringify(character.name)}</p>
        <p>AGE: {JSON.stringify(character.age)}</p>
        <p>CLASS: {JSON.stringify(character.charClass)}</p>
        <p>RACE: {JSON.stringify(character.race)}</p>
      </div>
    );
  } else {
    //TODO: ERROR PAGE REROUTE HERE
  }
}
