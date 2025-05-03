import { EditorState } from "../Mementos/EditorState.ts";
import { TextEditor } from "../TextEditor/TextEditor.ts";
import { Memento, Observer } from "../type.ts";

export class EditorWatcher implements Observer {
  createMemento(content: string): Memento {
    return new EditorState(content);
  }
}
