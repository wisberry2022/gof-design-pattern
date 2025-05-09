import { NormalBook } from "./Book/Book.ts";
import { BookShelf } from "./Iterator/BookShelf.ts";

const book1 = new NormalBook("앵무새 죽이기");
const book2 = new NormalBook("폭풍의 언덕");
const book3 = new NormalBook("서양 철학사");
const book4 = new NormalBook("달과 6펜스");

const bookShelf = new BookShelf();
const iterator = bookShelf.createIterator();
bookShelf.add(book1);
bookShelf.add(book2);
bookShelf.add(book3);
bookShelf.add(book4);

if (iterator.hasNext()) {
  console.log(iterator.next()?.getName());
}
if (iterator.hasNext()) {
  console.log(iterator.next()?.getName());
}
if (iterator.hasNext()) {
  console.log(iterator.next()?.getName());
}
if (iterator.hasNext()) {
  console.log(iterator.next()?.getName());
}
if (iterator.hasNext()) {
  console.log(iterator.next()?.getName());
}
if (iterator.hasNext()) {
  console.log(iterator.next()?.getName());
}

