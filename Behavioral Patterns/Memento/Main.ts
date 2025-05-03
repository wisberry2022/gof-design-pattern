import { EditorHistory } from "./History/EditorHistory.ts";
import { TextEditor } from "./TextEditor/TextEditor.ts";

let editor = new TextEditor();
const historyManager = new EditorHistory();

historyManager.addState(editor.write("안녕 "));
console.log(editor.getContent());
historyManager.addState(editor.write("나는 "));
console.log(editor.getContent());

historyManager.addState(editor.write("김 아무개야."));
console.log(editor.getContent());

editor = historyManager.undo() as TextEditor;

console.log(editor.getContent());
