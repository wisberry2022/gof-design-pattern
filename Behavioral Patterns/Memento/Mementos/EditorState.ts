import { Memento, Orginator } from "../type.ts";

export class EditorState implements Memento {
  private state: string;

  constructor(content: string) {
    this.state = content;
  }

  getState() {
    return this.state;
  }
}
