export type EditStateType = "EDITING" | "REVIEWING" | "PUBLISHED";

export interface DocumentEditorContext {
  setState(state: EditState): void;
  getState(): EditState;
  requestWrite(): void;
  requestRead(): void;

  setContent(value: string): void;
  getContent(): string;
  getTempInput(): string;
  read(): void;
}

export interface EditState {
  getType(): EditStateType;
  handleContent(context: DocumentEditorContext): void;
  handleRead(context: DocumentEditorContext): void;
}
