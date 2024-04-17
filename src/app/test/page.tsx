import { mutation } from "../../../static/helpers/mutation";
import { useEffect } from "react";
export default async function Test() {
  // let const data = await
  const args = {
    name: "testName",
    age: 42,
    race: "ORC",
    charClass: "BARBARIAN",
  };

  const test = await mutation("character/create", args);
  return <main>test</main>;
}
