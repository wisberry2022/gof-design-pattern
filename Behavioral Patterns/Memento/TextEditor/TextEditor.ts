import { EditorState } from "../Mementos/EditorState.ts";
import { EditorWatcher } from "../Observer/EditorWatcher.ts";
import { Memento, Observer, Orginator } from "../type.ts";

export class TextEditor implements Orginator {
  state!: Memento;
  private content: string;
  private observer: Observer;

  constructor(content?: string) {
    this.content = content ?? "";
    this.observer = new EditorWatcher();
  }

  write(text: string): Memento {
    this.content += text;
    return this.observer.createMemento(this.content);
  }

  getContent() {
    return this.content;
  }

  restore(memento: EditorState) {
    this.state = memento;
    this.content = memento.getState();
  }
}
