import { DocumentEditorContext, EditState, EditStateType } from "../type.ts";

export class Reviewing implements EditState {
  private type: EditStateType = "REVIEWING";

  getType() {
    return this.type;
  }

  handleContent(context: DocumentEditorContext) {
    if (context.getState().getType() === this.type) {
      console.log(`현재 상태 - 검토 모드`);
      console.log("현재 모드에서는 컨텐츠의 추가 입력만 가능합니다.");
      if (!context.getTempInput().includes(context.getContent())) {
        throw new Error("기존 컨텐츠의 삭제/수정은 불가능합니다");
      }
    }
  }

  handleRead(context: DocumentEditorContext) {
    console.log(`현재 상태 - ${this.type}`);
  }
}
