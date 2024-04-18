"use client";
import { useState } from "react";
import TextField from "@/components/Inputs/TextField";
import Select from "@/components/Inputs/Select";
import { classOptions, raceOptions } from "../../../static/charOptions";
import FormRow from "@/components/FormRow";
import Button from "@/components/Button";
import { createCharacter } from "@/API/mutation/character";
import { useRouter } from "next/navigation";

export default function NewCharacter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [charClass, setCharClass] = useState(classOptions[0].val);
  const [race, setRace] = useState(raceOptions[0].val);

  const router = useRouter();
  const createHandler = async () => {
    const args = {
      name: name,
      age: parseInt(age),
      race: race,
      charClass: charClass,
    };

    if (name && age && charClass && race) {
      const character = await createCharacter(args);
    }

    router.push("/characters");
  };

  return (
    <>
      <div className="flex flex-col items-center md:items-start">
        <FormRow>
          <TextField placeholder="Name" onUpdate={setName} val={name} />
          <TextField
            type="number"
            placeholder="Age"
            onUpdate={setAge}
            val={age}
          />
        </FormRow>
        <FormRow>
          <Select
            label="Class"
            options={classOptions}
            val={charClass}
            onUpdate={setCharClass}
          />
          <Select
            label="Race"
            options={raceOptions}
            val={race}
            onUpdate={setRace}
          />
        </FormRow>
        <FormRow>
          <Button text="CREATE" clickHandler={createHandler} />
        </FormRow>
      </div>
    </>
  );
}
