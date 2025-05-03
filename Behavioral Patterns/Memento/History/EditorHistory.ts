import { EditorState } from "../Mementos/EditorState.ts";
import { TextEditor } from "../TextEditor/TextEditor.ts";
import { CareTaker, Memento } from "../type.ts";

export class EditorHistory implements CareTaker {
  mementos: Memento[];

  constructor() {
    this.mementos = [];
  }

  addState(memento: Memento) {
    this.mementos.push(memento);
  }

  undo() {
    this.mementos.pop();
    const lastMemento = this.mementos.at(-1);
    if (!lastMemento) {
      const newOrginator = new TextEditor();
      this.addState(newOrginator.write(""));
      return newOrginator;
    }

    const orginator = new TextEditor();
    orginator.restore(lastMemento as EditorState);
    return orginator;
  }
}
