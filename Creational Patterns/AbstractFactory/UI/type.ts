export interface ButtonType {
  color: string;
  text: string;

  getStyle(): void;
}

export interface CheckboxType {
  backgroundColor: string;
  label: string;

  getStyle(): void;
}
