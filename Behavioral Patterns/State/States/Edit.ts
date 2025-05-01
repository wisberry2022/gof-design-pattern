import { DocumentEditorContext, EditState, EditStateType } from "../type.ts";

export class Edit implements EditState {
  private type: EditStateType = "EDITING";

  getType() {
    return this.type;
  }

  handleContent(context: DocumentEditorContext) {
    if (context.getState().getType() === this.type) {
      console.log(`현재 상태 - 편집 모드`);
    }
  }

  handleRead(context: DocumentEditorContext) {
    console.log(`현재 상태 - ${this.type}`);
  }
}
