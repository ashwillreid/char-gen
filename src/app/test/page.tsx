import { mutation } from "../../../static/helpers/mutation";
import { query } from "../../../static/helpers/query";
import { useEffect } from "react";
export default async function Test() {
  // const args = {
  //   name: "testName",
  //   age: 42,
  //   race: "ELF",
  //   charClass: "ROUGE",
  // };
  const test = await query("character/get/clv1k1ine000212zkykf27tzr");
  console.log("THIS IS A TEST", test);
  return <main>{JSON.stringify(test)}</main>;
}
// clv1k1ine000212zkykf27tzr
