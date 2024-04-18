import Select from "@/components/Inputs/Select";
import { classOptions, raceOptions } from "../../../../static/charOptions";
import FormRow from "@/components/FormRow";
import Button from "@/components/Button";
import { mutation } from "../../../../static/helpers/mutation";

export const createCharacter = async ({
  name,
  age,
  race,
  charClass,
}: {
  name: string;
  age: number;
  race: string;
  charClass: string;
}) => {
  const args = {
    name,
    age,
    race,
    charClass,
  };

  const character = await mutation("character/create", args);
};
