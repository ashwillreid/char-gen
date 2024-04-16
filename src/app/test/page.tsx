import { useRouter } from "next/navigation";
import { mutation } from "../../../static/helpers/mutation";
import { query } from "../../../static/helpers/query";
import { useEffect } from "react";

type Character = {
  name: string;
  age: number;
  race: string;
  charClass: string;
};

export default async function Test({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // const args = {
  //   name: "testName",
  //   age: 42,
  //   race: "ELF",
  //   charClass: "ROUGE",
  // };

  console.log("search params?", searchParams);
  const test = await query("character/clv1k1ine000212zkykf27tzr");
  console.log("THIS IS A TEST", test);
  return <main>{JSON.stringify(test.name)}</main>;
}
// clv1k1ine000212zkykf27tzr
