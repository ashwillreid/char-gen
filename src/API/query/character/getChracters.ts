import { query } from "../../../../static/helpers/query";

export const getCharacters = async () => {
  try {
    return await query("characters");
  } catch (error) {
    console.log("ERROR HURR", error);
  }
};
