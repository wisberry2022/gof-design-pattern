import { Book, Iterable, Iterator } from "../type.ts";
import { BookIterator } from "./BookIterator.ts";

export class BookShelf implements Iterable<Book> {
  private collections: Book[] = [];

  createIterator(): Iterator<Book> {
    return new BookIterator(this.collections);
  }

  add(book: Book) {
    this.collections.push(book);
  }
}
