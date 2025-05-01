import { Character } from "./character/Character.ts";

const archer = Character.createCharacter("레이나", "BOW");
archer.displayInfo();

const copiedArcher = archer.clone();
copiedArcher.setName("지나");
copiedArcher.setLevel(3);
copiedArcher.setEquip("GUN");

copiedArcher.displayInfo();
