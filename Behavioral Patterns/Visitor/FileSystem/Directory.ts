import { FileSystem, Visitor } from "../type.ts";
import { File } from "./File.ts";

export class Directory implements FileSystem {
  name: string;
  files: FileSystem[];

  constructor(name: string) {
    this.name = name;
    this.files = [];
  }

  accept(visitor: Visitor) {
    visitor.calcDirSize(this);
  }

  getSize() {
    return this.files.reduce((acc, cur) => (acc += cur.getSize()), 0);
  }

  getName() {
    return this.name;
  }

  getFilesName() {
    const fileNames = this.files.map((file) => file.getName()).join(", ");
    return fileNames;
  }

  addFile(file: FileSystem) {
    this.files.push(file);
  }
}
