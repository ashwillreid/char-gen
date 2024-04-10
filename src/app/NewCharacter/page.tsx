"use client";
import { useState, useEffect } from "react";
import TextField from "@/components/Inputs/TextField";
import Select from "@/components/Inputs/Select";
import { classOptions, raceOptions } from "../../../static/charOptions";

export default function NewCharacter() {
  const [name, setName] = useState("");
  const [charClass, setCharClass] = useState(classOptions[0].val);
  const [race, setRace] = useState(raceOptions[0].val);

  useEffect(() => {
    console.log("STATE:", { name: name, class: charClass, race: race });
  }, [charClass, name, race]);

  return (
    <>
      <TextField placeholder="Name" onUpdate={setName} val={name} />
      <Select
        label="Class"
        options={classOptions}
        val={charClass}
        onUpdate={setCharClass}
      />
      <Select
        label="Race"
        options={raceOptions}
        val={charClass}
        onUpdate={setRace}
      />
    </>
  );
}
