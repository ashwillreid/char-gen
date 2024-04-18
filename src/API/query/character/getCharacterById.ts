import { query } from "../../../../static/helpers/query";

export const getCharacterById = async (characterId: string) => {
  try {
    return await query(`character/${characterId}`);
  } catch (error) {
    console.log("ERROR HURR", error);
  }
};
