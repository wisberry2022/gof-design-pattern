import { Book, Iterator } from "../type.ts";

export class BookIterator<T> implements Iterator<T> {
  private books: T[];
  private idx: number;

  constructor(books: T[]) {
    this.books = books;
    this.idx = 0;
  }

  hasNext() {
    return !!this.books.at(this.idx);
  }

  next() {
    return this.books.at(this.idx++);
  }
}
