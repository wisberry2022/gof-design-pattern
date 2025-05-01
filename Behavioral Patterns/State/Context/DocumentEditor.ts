import { Edit } from "../States/Edit.ts";
import { DocumentEditorContext, EditState, EditStateType } from "../type.ts";

export class DocumentEditor implements DocumentEditorContext {
  private input: string;
  private content: string;
  private state: EditState;

  constructor() {
    this.input = "";
    this.content = "";
    this.state = new Edit();
  }

  setState(state: EditState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setContent(value: string) {
    try {
      this.input = value;
      this.requestWrite();
      this.content = value;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  getContent() {
    return this.content;
  }

  getTempInput() {
    return this.input;
  }

  read() {
    this.requestRead();
    console.log(`
      ==================== 컨텐츠 ====================
      ${this.content}   
      ================================================
    `);
  }

  requestWrite() {
    this.state.handleContent(this);
  }

  requestRead() {
    this.state.handleRead(this);
  }
}
