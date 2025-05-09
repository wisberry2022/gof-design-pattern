export interface Iterator<T> {
  hasNext(): boolean;
  next(): T | null | undefined;
}

export interface Iterable<T> {
  createIterator(): Iterator<T>;
  add(element: T): void;
}

export interface Book {
  getName(): string;
}
