"use client";
import { useState, useEffect } from "react";
import TextField from "@/components/Inputs/TextField";
import Select from "@/components/Inputs/Select";
import { classOptions, raceOptions } from "../../../static/charOptions";
import FormRow from "@/components/FormRow";

export default function NewCharacter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [charClass, setCharClass] = useState(classOptions[0].val);
  const [race, setRace] = useState(raceOptions[0].val);

  useEffect(() => {
    console.log("STATE:", { name: name, class: charClass, race: race });
  }, [charClass, name, race]);

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
      </div>
    </>
  );
}
