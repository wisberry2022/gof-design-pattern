export interface Visitor {
  calcFileSize(system: FileSystem): void;
  calcDirSize(system: FileSystem): void;
}

export interface FileSystem {
  accept(visitor: Visitor): void;
  getSize(): number;
  getName(): string;
}
