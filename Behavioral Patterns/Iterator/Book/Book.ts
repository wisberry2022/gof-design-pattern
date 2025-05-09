import { Book } from "../type.ts";

export class NormalBook implements Book {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
