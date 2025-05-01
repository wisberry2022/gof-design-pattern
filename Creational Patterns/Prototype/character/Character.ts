import { CharacterPrototype } from "../clonable/CharacterPrototype.ts";

type GameEquipment = "SWORD" | "BOW" | "GUN";

export class Character implements CharacterPrototype {
  name: string;
  level: number;
  equipment: GameEquipment;

  private constructor(name: string, level: number, equipment: GameEquipment) {
    this.name = name;
    this.level = level;
    this.equipment = equipment;
  }

  static createCharacter(name: string, equipment: GameEquipment) {
    return new Character(name, 1, equipment);
  }

  setName(name: string) {
    this.name = name;
    console.log(`이름이 ${this.name}으로 수정되었습니다.`);
  }

  setLevel(level: number) {
    this.level = level;
    console.log(`${this.level}로 레벨업하였습니다.`);
  }

  setEquip(equipment: GameEquipment) {
    this.equipment = equipment;
    console.log(`무기를 ${this.equipment}로 바꾸었습니다.`);
  }

  displayInfo() {
    console.log(`
      =========== ${this.name} ===========
      레벨: ${this.level}
      장비: ${this.equipment}
    `);
  }

  clone() {
    return new Character(this.name, this.level, this.equipment);
  }
}
