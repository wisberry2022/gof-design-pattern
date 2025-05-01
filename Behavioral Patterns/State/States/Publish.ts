import { DocumentEditorContext, EditState, EditStateType } from "../type.ts";

export class Publish implements EditState {
  private type: EditStateType = "PUBLISHED";

  getType() {
    return this.type;
  }

  handleContent(context: DocumentEditorContext) {
    if (context.getState().getType() === this.type) {
      console.log(`현재 상태 - 발행 모드`);
      throw new Error("읽기 전용입니다!");
    }
  }

  handleRead(context: DocumentEditorContext) {
    console.log(`현재 상태 - ${this.type}`);
  }
}
