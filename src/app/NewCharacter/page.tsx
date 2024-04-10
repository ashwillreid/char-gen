"use client";
import { useState } from "react";
import TextField from "@/components/Inputs/TextField";

export default function NewCharacter() {
  const [name, setName] = useState("");

  return (
    <>
      <TextField placeholder="Name" onUpdate={setName} val={name} />
    </>
  );
}
