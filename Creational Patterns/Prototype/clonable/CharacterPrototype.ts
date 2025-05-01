import { Character } from "../character/Character.ts";

export interface CharacterPrototype {
  clone(): Character;
}
