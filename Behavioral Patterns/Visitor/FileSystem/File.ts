import { FileSystem, Visitor } from "../type.ts";

export class File implements FileSystem {
  name: string;
  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  accept(visitor: Visitor) {
    visitor.calcFileSize(this);
  }

  getSize() {
    return this.size;
  }

  getName() {
    return this.name;
  }
}
